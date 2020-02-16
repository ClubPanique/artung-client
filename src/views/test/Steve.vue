<template>
  <div>
    <FormGroupInline iconStatus="wordpress"></FormGroupInline>
    <FormGroup typeStatus="password"></FormGroup>
    <Checkbox></Checkbox>
    <TextButton secondary form></TextButton>
  </div>
</template>

<script>
import TextButton from '../../components/buttons/TextButton'
import Checkbox from '../../components/forms/Checkbox'
import FormGroup from '../../components/forms/FormGroup'
import FormGroupInline from '../../components/forms/FormGroupInline'

export default {
  name: 'Steve',
  components: {
    FormGroup,
    Checkbox,
    TextButton,
    FormGroupInline
  },
data() {
    return {
      typeStatus: "text mais il s'en fout..."
    };
  }
};
</script>

<style scoped lang="scss">

</style>
