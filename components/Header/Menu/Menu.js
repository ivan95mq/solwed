import Link from "next/link";
import { Container, Menu as M, Grid, Icon, Label } from "semantic-ui-react";

export default function Menu() {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu__left" width={6}>
            <MenuPlatforms />
          </Grid.Column>
          <Grid.Column className="menu__right" width={10}>
            <MenuOptions />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function MenuPlatforms() {
  return (
    <M>
      <Link href="/play-station">
        <M.Item as="a">PlayStation</M.Item>
      </Link>

      <Link href="/xbox">
        <M.Item as="a">XboX</M.Item>
      </Link>

      <Link href="/switch">
        <M.Item as="a">Switch</M.Item>
      </Link>
    </M>
  );
}
function MenuOptions() {
  return (
    <M>
      <M.Item>
        <Icon name="user outline" />
        Mi cuenta
      </M.Item>
    </M>
  );
}
