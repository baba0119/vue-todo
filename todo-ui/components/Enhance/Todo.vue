<template>
  <ProviderTodo>
    <PresentationLayoutTodo>
      <template v-slot:form>
        <PresentationPartForm/>
      </template>
      <template v-slot:todo-list>
        <PresentationPartTodoList/>
      </template>
    </PresentationLayoutTodo>
  </ProviderTodo>
</template>