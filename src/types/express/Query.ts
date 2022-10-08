import QueryString from "qs";

export type Query =
	| string
	| QueryString.ParsedQs
	| string[]
	| QueryString.ParsedQs[]
	| undefined;
