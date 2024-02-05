export interface TodoModel {
  id: number;
  title: string;
  completed: boolean;
  editing?: boolean;
}
//TODO REVISAR LAS OPCIONES PARA MANEJAR UN TASKS DO DOING DONE
export type FilterType = 'all' | 'active' | 'completed';
