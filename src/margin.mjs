import { writeFileSync } from "fs";

export const marginGenerator = () => {
	const output = [];

	for (let side of ["top", "bottom", "right", "left"]) {
		for (let size of ["xxs", "xs", "s", "m", "l", "xl", "xxl"]) {
			output.push(`
			.m${side[0]}-${size} { margin-${side}: var(--space-${size}); }
		`);
		}
	}

	writeFileSync("src/margin.css", output.join(""), { encoding: "utf-8" });
};
