---
title: Apache CloudStack Ubuntu/KVM Install Guide
description: An IaaS Private Cloud Install Guide
sidebar:
  order: 1
  badge: Popular
---

WIP...

A page with a wide variety of different [Markdown syntax](https://starlight.astro.build/guides/authoring-content/) or [components](https://starlight.astro.build/components/using-components/) to show how these look together.
See the following pages for individual examples.

## Asides

:::note
A `:::note` block or `<Aside type="note">` looks like this.
:::

:::tip
A `:::tip` block or `<Aside type="tip">` looks like this.
:::

:::caution
A `:::caution` block or `<Aside type="caution">` looks like this.
:::

:::danger
A `:::danger` block or `<Aside type="danger">` looks like this.
:::

## Blockquotes

> Be not afeard; the isle is full of noises,  
> Sounds and sweet airs, that give delight and hurt not.

## Cards

import { Card, CardGrid } from '@astrojs/starlight/components';

<CardGrid>
	<Card title="Check this out" icon="open-book">
		Interesting content you want to highlight.
	</Card>
	<Card title="Other feature" icon="information">
		More information you want to share.
	</Card>
	<Card title="Computer stuff" icon="laptop">
		Build internet things with your computation machine.
	</Card>
	<Card title="Starlight ready" icon="starlight">
		Just add Starlight and this theme comes to life.
	</Card>
</CardGrid>

## Link cards

import { LinkCard } from '@astrojs/starlight/components';

<LinkCard
	title="Internationalization"
	href="https://starlight.astro.build/guides/i18n/"
	description="Configure Starlight to support multiple languages."
/>

## Badges

import { Badge } from '@astrojs/starlight/components';

- <Badge text="Note" variant="note" />
- <Badge text="Success" variant="success" />
- <Badge text="Tip" variant="tip" />
- <Badge text="Caution" variant="caution" />
- <Badge text="Danger" variant="danger" />

### Different sizes

- <Badge text="Small" size="small" />
- <Badge text="Medium" size="medium" />
- <Badge text="Large" size="large" />

## Code

### With an editor frame

```astro title="example.astro" {6} ins="insertions" del="deletions"
---
// this is a code block example
---
<p>Code can include something dynamic: {Astro.props.variable}</p>

Or highlight important lines!

Including insertions or deletions.
```

### Terminal commands

```sh
echo "Welcome, world!"
```

### Basic

Code block without a frame:

```js
// for example
console.log('Welcome, world!');
```

### Labels

```jsx {"1":5} del={"2":7-8} ins={"3":10}
// labeled-line-markers.jsx
<button
	role="button"
	{...props}
	value={value}
	className={buttonClassName}
	disabled={disabled}
	active={active}
>
	{children && !active && (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

## File tree

import { FileTree } from '@astrojs/starlight/components';

<FileTree>

- astro.config.mjs
- package.json
- src
  - components
    - Header.astro
    - Title.astro
  - pages/

</FileTree>

## Link buttons

import { LinkButton } from '@astrojs/starlight/components';

<LinkButton href="/starlight-theme-flexoki/getting-started/">Get started</LinkButton>
<LinkButton href="/starlight-theme-flexoki/configuration/" variant="secondary">
	Configuration Reference
</LinkButton>
<LinkButton href="/starlight-theme-flexoki/configuration/" variant="minimal" icon="external">
	Learn more
</LinkButton>

## Steps

import { Steps } from '@astrojs/starlight/components';

<Steps>

1. Import the component into your MDX file:

   ```js
   import { Steps } from '@astrojs/starlight/components';
   ```

2. Wrap `<Steps>` around your ordered list items.

</Steps>

## Tabs

import { Tabs, TabItem } from '@astrojs/starlight/components';

<Tabs>
	<TabItem label="Stars" icon="star">
		Sirius, Vega, Betelgeuse
	</TabItem>
	<TabItem label="Moons" icon="moon">
		Io, Europa, Ganymede
	</TabItem>
</Tabs>

## Details

<details>
<summary>Where and when is the Andromeda constellation most visible?</summary>

The [Andromeda constellation](<https://en.wikipedia.org/wiki/Andromeda_(constellation)>) is most visible in the night sky during the month of November at latitudes between `+90°` and `−40°`.

</details>

## Tables

| Left         |     Centered     |                      Right |
| :----------- | :--------------: | -------------------------: |
| This is left | Text is centered |  And this is right-aligned |
| More text    |  Even more text  | And even more to the right |
