import CardIconParagraph from "@/components/Cards/CardIconParagraph.vue";

export default {
  title: "Kit/Cards/CardIconParagraph",
  component: CardIconParagraph,
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
