import CardIconParagraph from "@/components/Cards/CardIconParagraph.vue";
import BgColors from "/public/data/tokensBg.json";
import TextColors from "/public/data/tokensText.json";
import FontAwesomeIcons from "/public/data/fontAwesomeClasses.json";
const BgColorsKeys = Object.keys(BgColors);
const textColorsKeys = Object.keys(TextColors);

export default {
  title: "Kit/Cards/CardIconParagraph",
  component: CardIconParagraph,
  argTypes: {
    bgColor: {
      options: BgColorsKeys,
      control: {
        type: "select",
      },
      defaultValue: "bg-red-400",
    },
    Color: {
      defaultValue: "text-white",
      control: { type: "select" },
      options: textColorsKeys,
    },
    iconClass: {
      defaultValue: "fas fa-award",
      control: { type: "select" },
      options: FontAwesomeIcons,
    },
    SizeClasses: {
      defaultValue: "medium",
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    Shadow: {
      control: { type: "select" },
      defaultValue: "large",
      options: ["xsmall", "small", "medium", "large", "xlarge"],
    },
  },
};

const Template = (_args, { argTypes }) => ({
  data() {
    return {
      newbox: {
        header: "Box One",
        body:
          "Box one Box one Box one Box one Box one Box one Box one Box one Box one",
      },
      iconcircle: {
        bgColor: "bg-black",
        Color: "text-white",
        Shadow: "large",
        SizeClasses: "large",
        iconClass: "fas fa-award",
      },
    };
  },
  props: Object.keys(argTypes),
  components: { CardIconParagraph },
  template:
    '<CardIconParagraph :box="this.newbox" :icon="this.iconcircle" v-bind="args"></CardIconParagraph>',
});
export const Default = Template.bind({});

Default.parameters = {
  backgrounds: { default: "baby-blue" },
};
