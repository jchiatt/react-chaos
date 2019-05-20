# 🔥 React Chaos

Chaos Engineering for your React applications.

## Installation

```
npm i --save-dev react-chaos
```

## Usage

First, import the Chaos:

```
import Chaos from 'react-chaos';
```

Wrap any part(s) of your component tree with the Chaos:

```
<Chaos>
  <ComponentOne />
  <ComponentTwo />
  <ComponentThree />
</Chaos>
```

You can optionally set a Chaos level between 1 and 10 (the higher the number, the more Chaos 😈):

```
<Chaos level={5}>
  <ComponentOne />
  <ComponentTwo />
  <ComponentThree />
</Chaos>
```

Note: The default Chaos level is 5. This means that for each child component inside `Chaos`, there is a 50% chance Chaos will occur (respectively).
