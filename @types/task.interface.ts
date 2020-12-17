export default interface Task {
    _id: string;
    userId: string;
    text: string;
    createdAt: Date;
    isChecked: boolean;
}