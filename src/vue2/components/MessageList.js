import MessageListItem from "./MessageListItem.js";
import lifecycleLogger from "../mixins/lifecycle-logger.mixin.js";
export default {
  name: "MessageList",
  mixins: [lifecycleLogger],
  template: `<ul>
      <message-list-item v-for="item in items" :item="item" :key="item.id" @delete="deleteMessage(item)">
      </message-list-item></ul>`,
  components: {
    MessageListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    deleteMessage(message) {
      // $emit() 부모 자식간의 통신 함수
      this.$emit("delete", message);
    },
  },
};
