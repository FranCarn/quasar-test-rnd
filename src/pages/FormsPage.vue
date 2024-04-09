<template>
  <q-page class="q-pa-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md col-xs-12 col-md-6 q-pt-xl"
      >
        <q-input
          filled
          v-model="userForm.email"
          label="Email *"
          type="email"
          hint="Write your email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type something',
            isValidEmail,
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password1"
          label="password *"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Please type your password',
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Confirm password *"
          lazy-rules
          :rules="[
            (val) =>
              (val !== null && val !== '') || 'Please repeat your password',
            isSamePassword,
          ]"
        />

        <q-toggle
          v-model="userForm.conditionsToggle"
          label="I accept the license and terms"
        />

        <q-checkbox
          v-model="userForm.conditions"
          label="I accept Terms & Conditions"
          :style="
            userForm.errorInContitions && !userForm.conditions && 'color: red'
          "
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "FormsPage",
});

const userForm = ref({
  email: "",
  password1: "",
  password2: "",
  conditions: false,
  conditionsToggle: false,
  errorInContitions: false,
});
const onSubmit = () => {
  userForm.value.errorInContitions = false;
  if (!userForm.value.conditions) {
    console.log("Should accept conditions");
    userForm.value.errorInContitions = true;
    return;
  }
  console.log(userForm);
};
const onReset = () => {
  userForm.value = {
    email: "",
    password1: "",
    password2: "",
    conditions: false,
    conditionsToggle: false,
    errorInContitions: false,
  };
};
const isValidEmail = (val) => {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || "Your Email is invalid";
};
const isSamePassword = (val) => {
  return val === userForm.value.password1 || "Should match passwords.";
};
</script>
