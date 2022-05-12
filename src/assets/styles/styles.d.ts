import "styled-components";
import theme from "./theme";

declare module "styled-components" {
	type ThemeType = typeof theme & {
		[key: string]: string
	};

	export interface DefaultTheme extends ThemeType {};
}