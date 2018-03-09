export const validateRules = {
  mobile: {
    messages: {
      ch: (field) => field + '格式不正确'
    },
    validate (value) {
      return value.toString().length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
  }
}
