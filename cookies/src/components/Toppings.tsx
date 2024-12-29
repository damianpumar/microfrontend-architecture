const ingredients: Record<Ingredient, string> = {
	chocolate: 'Chocolate',
	cocoa: 'Cocoa',
	cherry: 'Cherry',
	marshmallow: 'Marshmallow',
	peanut: 'Peanut',
};

export const Toppings = ({ user, cookie }: { user: User | null; cookie: Product }) => {
	return (
		<ul>
			{cookie.toppings.map((topping) => (
				<li key={topping}>
					{ingredients[topping]}

					{user?.hasPreference(topping) && <>👍</>}
					{user?.hasAllergy(topping) && <>⚠️</>}
				</li>
			))}
		</ul>
	);
};
