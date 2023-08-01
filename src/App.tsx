import { ThemeProvider } from "styled-components";
import { Button } from "./components/Buttons";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyled } from "./global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="danger"/>
      <Button variant="success"/>
      <GlobalStyled/>
    </ThemeProvider>
  );
}
