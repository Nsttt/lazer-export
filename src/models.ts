export const Beatmap = {
  name: "Beatmap",
  primaryKey: "ID",
  properties: {
    ID: "uuid",
    DifficultyName: "string?",
    Ruleset: "Ruleset",
    Difficulty: "BeatmapDifficulty",
    Metadata: "BeatmapMetadata",
    BeatmapSet: "BeatmapSet",
    UserSettings: "BeatmapUserSettings",
    Status: "int",
    Length: "double",
    BPM: "double",
    Hash: "string?",
    StarRating: "double",
    MD5Hash: "string?",
    Hidden: "bool",
    AudioLeadIn: "double",
    StackLeniency: "float",
    SpecialStyle: "bool",
    LetterboxInBreaks: "bool",
    WidescreenStoryboard: "bool",
    EpilepsyWarning: "bool",
    SamplesMatchPlaybackRate: "bool",
    DistanceSpacing: "double",
    BeatDivisor: "int",
    GridSize: "int",
    TimelineZoom: "double",
    OnlineID: { type: "int", indexed: true },
    CountdownOffset: "int",
  },
};

export const BeatmapUserSettings = {
  name: "BeatmapUserSettings",
  embedded: true,
  properties: {
    Offset: "double",
  },
};

export const BeatmapDifficulty = {
  name: "BeatmapDifficulty",
  embedded: true,
  properties: {
    DrainRate: "float",
    CircleSize: "float",
    OverallDifficulty: "float",
    ApproachRate: "float",
    SliderMultiplier: "double",
    SliderTickRate: "double",
  },
};

export const BeatmapMetadata = {
  name: "BeatmapMetadata",
  properties: {
    Title: "string?",
    TitleUnicode: "string?",
    Artist: "string?",
    ArtistUnicode: "string?",
    Source: "string?",
    Tags: "string?",
    PreviewTime: "int",
    AudioFile: "string?",
    BackgroundFile: "string?",
    Author: "RealmUser",
  },
};

export const BeatmapSet = {
  name: "BeatmapSet",
  primaryKey: "ID",
  properties: {
    ID: "uuid",
    DateAdded: "date",
    Beatmaps: "Beatmap[]",
    Files: "RealmNamedFileUsage[]",
    DeletePending: "bool",
    Hash: "string?",
    Protected: "bool",
    OnlineID: { type: "int", indexed: true },
    Status: "int",
  },
};

export const File = {
  name: "File",
  primaryKey: "Hash",
  properties: {
    Hash: "string?",
  },
};

export const KeyBinding = {
  name: "KeyBinding",
  primaryKey: "ID",
  properties: {
    ID: "uuid",
    Variant: "int?",
    Action: "int",
    KeyCombination: "string?",
    RulesetName: "string?",
  },
};

export const RealmNamedFileUsage = {
  name: "RealmNamedFileUsage",
  embedded: true,
  properties: {
    File: "File",
    Filename: "string?",
  },
};

export const RealmUser = {
  name: "RealmUser",
  embedded: true,
  properties: {
    OnlineID: "int",
    Username: "string?",
  },
};

export const Ruleset = {
  name: "Ruleset",
  primaryKey: "ShortName",
  properties: {
    ShortName: "string?",
    Name: "string?",
    InstantiationInfo: "string?",
    Available: "bool",
    OnlineID: { type: "int", indexed: true },
  },
};

export const RulesetSetting = {
  name: "RulesetSetting",
  properties: {
    Variant: { type: "int", indexed: true },
    Key: "string",
    Value: "string",
    RulesetName: { type: "string?", indexed: true },
  },
};

export const Score = {
  name: "Score",
  primaryKey: "ID",
  properties: {
    ID: "uuid",
    BeatmapInfo: "Beatmap",
    Ruleset: "Ruleset",
    Files: "RealmNamedFileUsage[]",
    Hash: "string?",
    DeletePending: "bool",
    TotalScore: "int",
    MaxCombo: "int",
    Accuracy: "double",
    HasReplay: "bool",
    Date: "date",
    PP: "double?",
    OnlineID: { type: "int", indexed: true },
    User: "RealmUser",
    Mods: "string?",
    Statistics: "string?",
    Rank: "int",
    Combo: "int",
  },
};

exports.Skin = {
  name: "Skin",
  primaryKey: "ID",
  properties: {
    ID: "uuid",
    Name: "string?",
    Creator: "string?",
    InstantiationInfo: "string?",
    Hash: "string?",
    Protected: "bool",
    Files: "RealmNamedFileUsage[]",
    DeletePending: "bool",
  },
};
