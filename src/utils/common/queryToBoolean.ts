export const queryStringToBool = (query: any) => {
	if (query === "true") return true;
	if (query === "false") return false;
	return undefined;
};
