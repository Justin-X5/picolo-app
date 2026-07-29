export interface GameCardProps {
    test: string;
    onPress: () => void;
}

export type TaskType = 'action' | 'duel' | 'voting' | 'virus' | 'antivirus';

export interface Task {
  id: string;
  text: string;
  type: TaskType;
  sips?: number; 
}