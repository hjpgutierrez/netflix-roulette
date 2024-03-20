import MovieImage from "./MovieImage";

export default {
  title: "Components/MovieImage",
  component: MovieImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    urlImage: {
      control: {
        type: "string",
      },
    },
  },
  args: {
    urlImage: "",
  },
};

export const RenderExternalImage = {
  args: {
    urlImage:
      "https://purepng.com/public/uploads/large/purepng.com-avataravatarjames-camerons-avatarscience-fiction-filmherosactors-1701528521646rbihs.png",
  },
};
