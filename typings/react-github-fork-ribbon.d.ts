declare module "react-github-fork-ribbon" {
    import { ComponentType } from "react";
    const GithubForkRibbon: ComponentType<{
        href: string,
        target?: string,
        position?: "left" | "right" | "left-bottom" | "right-bottom",
        color?: "red" | "orange" | "black" | "green",
    }>;

    export default GithubForkRibbon;
}