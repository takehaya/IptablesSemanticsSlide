declare module "spectacle-image-slide" {
    import { ComponentType } from "react";
    const ImageSlide: ComponentType<{
        image: string,
        title?: string,
        titleProps: object;
    }>;

    export default ImageSlide;
}
