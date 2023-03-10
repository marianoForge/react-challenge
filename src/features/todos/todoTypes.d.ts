export type TodoId = string;

export interface Todo {
  id: TodoId;
  title: string;
  completed: boolean;
}

export interface TodosState {
  list: Todo[];
}
