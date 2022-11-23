![Fleet Owner cover image](https://res.cloudinary.com/argyle-media/image/upload/v1669116483/argyle-x/fleet-owner/fleet-owner-cover.png)

When drivers connect through Argyle, you get access to actionable information from the largest rideshare, delivery, and gig platforms.

Viewing driver earnings, tracking activity and miles, and monitoring driver tenure can help:

- **Lower your insurance premiums**, by enabling you to provide more granular data for each insurance period when adding coverage
- **Optimize your revenue**, by helping you prioritize which drivers are most active and are generating the most mileage fees
- **Reduce payment risk**, by staying informed at all times of your drivers’ activity levels

You can try out the Fleet Owner App [here](https://sampleapps.argyle.com/fleet-owner) and learn more about the features [here](https://docs.argyle.com/guides/docs/fleet-owner).

## Getting Started

Rename env.example to .env and fill in Argyle related keys from your [console.argyle.com](https://console.argyle.com) account.

Install the dependencies

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [localhost:3000/fleet-owner](http://localhost:3000/fleet-owner) with your browser to see the result.

## Folder structure (in `src`)

- **Charts** - chart components using [visx](https://airbnb.io/visx/)
- **Components** - components that do not carry their own state but rather use what is provided via props.
- **Hooks** - used when caching when same network calls are required for multiple components.
- **Layouts** - define reusable page layouts.
- **Models** - store reusable TypeScript types.
- **Pages** - API for all backend functionality that's hidden from end-user. To not expose any keys or potentially abusive calls.
- **Stores** - [Jotai](https://jotai.org/) React state management with an atomic model.
- **Styles** - [TailwindCSS](https://tailwindcss.com/) globals and [react-day-picker](https://react-day-picker.js.org/) style overrides. `tailwind.config.js` file contains custom styling presets like fonts and colors.
- **Utils** - store reusable functions.
- **Views** - smart views that have their own state, business logic and are reused over multiple screens.

## Learn More

To learn more, take a look at the following resources:

- [Argyle Docs](https://argyle.com/docs) - learn about Argyle integration
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

### Page order

1. /landing
2. /connect - Argyle Link flow
3. /approved
4. /landing (enabled Fleet Owner)
5. /connected (access to /settings)
6. /
