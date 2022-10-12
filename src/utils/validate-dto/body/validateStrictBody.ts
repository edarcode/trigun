import { PropsValidateStrictBody } from "../../../types/validate-dto/ValidateStrictBody";
import { validateKeysBody } from "./validateKeysBody";
import { validateLenBody } from "./validateLenBody";

export const validateStrictBody = (props: PropsValidateStrictBody) => {
	const { dto, len } = props;
	validateLenBody(dto, len);

	const { rules } = props;
	validateKeysBody(dto, rules);
};
