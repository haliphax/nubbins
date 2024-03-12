import { writeFileSync } from "fs";

export const paddingGenerator = () => {
	const output = [];

	for (let side of ["top", "bottom", "right", "left"]) {
		for (let size of ["xxs", "xs", "s", "m", "l", "xl", "xxl"]) {
			output.push(`
			.p${side[0]}-${size} { padding-${side}: var(--space-${size}); }
		`);
		}
	}

	writeFileSync("src/padding.css", output.join(""), { encoding: "utf-8" });
};
