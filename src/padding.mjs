import { writeFileSync } from "fs";

export const paddingGenerator = () => {
	const output = [];

	for (let size of ["xxs", "xs", "s", "m", "l", "xl", "xxl"]) {
		for (let side of ["top", "bottom", "right", "left"]) {
			output.push(
				`.p${side[0]}-${size} { padding-${side}: var(--space-${size}); }\n`,
			);
		}

		output.push(`.px-${size} { padding-inline: var(--space-${size}); }\n`);
		output.push(`.py-${size} { padding-block: var(--space-${size}); }\n`);
	}

	writeFileSync("src/padding.css", output.join(""), { encoding: "utf-8" });
};
