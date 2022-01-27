import { Label, LabelProps } from '@primer/react';
import { getLuminance, parseToHsla, parseToRgba } from 'color2k';
import { useContext, useMemo, useRef } from 'react';
import { ThemeContext } from 'styled-components';

export interface IssueLabelProps extends LabelProps {
  colorHex: string;
  url: string;
  nameHtml: string;
}

const lightModeStyles = {
  '--lightness-threshold': '0.453',
  '--border-threshold': '0.96',
  '--border-alpha':
    'max(0, min(calc((var(--perceived-lightness) - var(--border-threshold)) * 100), 1))',
  background: 'rgb(var(--label-r), var(--label-g), var(--label-b))',
  color: 'hsl(0, 0%, calc(var(--lightness-switch) * 100%))',
  borderColor:
    'hsla(var(--label-h),calc(var(--label-s) * 1%),calc((var(--label-l) - 25) * 1%),var(--border-alpha))',
};

const darkModeStyles = {
  '--lightness-threshold': '0.6',
  '--background-alpha': '0.18',
  '--border-alpha': '0.3',
  '--lighten-by':
    'calc(((var(--lightness-threshold) - var(--perceived-lightness)) * 100) * var(--lightness-switch))',
  borderWidth: 1,
  borderStyle: 'solid',
  background:
    'rgba(var(--label-r), var(--label-g), var(--label-b), var(--background-alpha))',
  color:
    'hsl(var(--label-h), calc(var(--label-s) * 1%), calc((var(--label-l) + var(--lighten-by)) * 1%))',
  borderColor:
    'hsla(var(--label-h), calc(var(--label-s) * 1%),calc((var(--label-l) + var(--lighten-by)) * 1%),var(--border-alpha))',
};

export function IssueLabel({
  colorHex,
  url,
  nameHtml,
  sx,
  ...props
}: IssueLabelProps) {
  const theme = useContext(ThemeContext);
  const ref = useRef(null);
  const labelStyles = useMemo(() => {
    const mode =
      getLuminance(theme.colors.canvas.default) > 0.5 ? 'light' : 'dark';
    const [r, g, b] = parseToRgba(`#${colorHex}`);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [h, s, l] = parseToHsla(`#${colorHex}`);

    // label hack taken from https://github.com/github/github/blob/master/app/assets/stylesheets/hacks/hx_primer-labels.scss#L43-L108
    // this logic should eventually live in primer/components. Also worthy of note is that the dotcom hack code will be moving to primer/css soon.
    return {
      ...sx,
      '--label-r': String(r),
      '--label-g': String(g),
      '--label-b': String(b),
      '--label-h': String(Math.round(h)),
      '--label-s': String(Math.round(s * 100)),
      '--label-l': String(Math.round(l * 100)),
      '--perceived-lightness':
        'calc(((var(--label-r) * 0.2126) + (var(--label-g) * 0.7152) + (var(--label-b) * 0.0722)) / 255)',
      '--lightness-switch':
        'max(0, min(calc((var(--perceived-lightness) - var(--lightness-threshold)) * -1000), 1))',
      ...(mode === 'light' ? lightModeStyles : darkModeStyles),
    };
  }, [sx, theme, colorHex]);

  return (
    // We expect `nameHtml` below to be the unmodified string from the server.
    // Since the server will have already sanitized this string, it should
    // be safe to pass to `dangerouslySetInnerHTML`.
    <Label sx={{ ...labelStyles }} {...props} ref={ref}>
      <div dangerouslySetInnerHTML={{ __html: nameHtml }} />
    </Label>
  );
}
