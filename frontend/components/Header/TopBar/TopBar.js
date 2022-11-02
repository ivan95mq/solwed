import Link from "next/link";
import { Container, Grid, GridColumn, Image, Input } from "semantic-ui-react";

export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <GridColumn width={8} className="top-bar__left">
            <Logo />
          </GridColumn>
          <GridColumn width={8} className="top-bar__right">
            <Search />
          </GridColumn>
        </Grid>
      </Container>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <Image src="/Logotipo_Es_Claro.png" alt="SOLWED.ES " />
    </Link>
  );
}

function Search() {
  return <Input id="search" icon={{ name: "search" }} />;
}
