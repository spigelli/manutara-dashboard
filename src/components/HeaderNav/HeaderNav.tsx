import { Header, StyledOcticon, Text } from '@primer/react';
import { MarkGithubIcon } from '@primer/octicons-react';

export function HeaderNav() {
  return (
    <Header sx={{ px: [2, 3, 4, 5] }}>
      <Header.Item>
        <Header.Link href="#">
          <StyledOcticon icon={MarkGithubIcon} size={32} sx={{ mr: 2 }} />
          <Text fontSize={2}>Manutara Dashboard</Text>
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link>About</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link>Spec</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link>Documentation</Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link>GitHub</Header.Link>
      </Header.Item>
    </Header>
  );
}
