import { Header } from "../../components/Header/Index";
import { Outlet } from "react-router-dom";
import {LayoutStyled} from './styles'

export function Index() {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
}
