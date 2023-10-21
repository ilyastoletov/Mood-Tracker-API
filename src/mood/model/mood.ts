export type CreateMoodObjectModel = {
    moodType: MoodType,
    text: String
}

export enum MoodType {
    VERY_BAD,
    SUFFERING,
    AVERAGE,
    NICE,
    SUPER
}