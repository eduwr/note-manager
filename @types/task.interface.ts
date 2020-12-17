export default interface Task {
    _id: string;
    text: string;
    createdAt: Date;
    isChecked: boolean;
}