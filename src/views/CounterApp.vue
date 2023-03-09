<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
    <button @click="setValue(5)">Set to 5</button>
  </div>
</template>

<script>
import useCounter from "@/composables/counter";
import { mapState, mapActions } from "vuex";

export default {
  setup() {
    const { state, increment, decrement, reset, setValue } = useCounter();
    const { counter } = mapState("counter", ["counter"]);
    const { setCounter, incrementCounter, decrementCounter, resetCounter } =
      mapActions("counter", [
        "setCounter",
        "incrementCounter",
        "decrementCounter",
        "resetCounter",
      ]);

    return {
      state,
      counter,
      increment,
      decrement,
      reset,
      setValue,
      setCounter,
      incrementCounter,
      decrementCounter,
      resetCounter,
    };
  },
};
</script>
