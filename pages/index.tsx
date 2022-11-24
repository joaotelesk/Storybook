import Button from "../src/Components/Button/Button";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <div>
        <h1>Home Page</h1>
        <Button variant="primary">clique aqui</Button>
      </div>
    </ThemeProvider>
  );
}
