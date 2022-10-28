<p align="center">
 <img width="300px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1666980303/yassi/iusopv68mb8pbelbaayq.svg" align="center" alt="larousse" />
</p>

<br/>

<p align="center">
  <a href="https://npmjs.org/package/larousse">
    <img src="https://img.shields.io/npm/v/larousse.svg" alt="version">
  </a>
</p>

<p align="center">
  <b>📟 A command line interface to get french word definitions & synonymes from
  <a href='https://github.com/Ysn4Irix/ex-api-template' target='_blank'>
  larousse
  </a>
    website
  </b>
</p>

<br>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1666982656/yassi/wvj6qk0ifkg8kak5cpw9.gif" alt="larousse" width="450" style="border-radius: 5px;"><br>
</p>

<br>

![📟](https://res.cloudinary.com/ydevcloud/image/upload/v1656874185/asm9cp84cbuuqmarw9wq.png)

## ❯ Install

Requires Node.js 15.0 or higher download & install for [Windows](https://nodejs.org/en/download/) or [Linux](https://nodejs.org/en/download/)

```sh
npm install -g larousse
```

<br>

![⚙️](https://res.cloudinary.com/ydevcloud/image/upload/v1656874522/fmfktytvymbnnc0fg4zz.png)

## ❯ Usage

```sh
larousse <command> -w <word> -o <Path>
```

##### COMMANDS

```sh
define  Get the definition of a french word
syno    Get the synonymes of a french word
```

##### OPTIONS

```sh
  -w, --word     The french word
  -o, --output   The path of where to save results
  --clear        Clear the console
  --help         Print help info
  --debug        Print debug info
  -v, --version  Print CLI version
```

##### EXAMPLE

```sh
# Get definitions
larousse define --word accelerer --output ~/Desktop

# Get synonymes
larousse syno --word accelerer --output ~/Desktop
```

Results will be saved in a `.txt` file in this case on `Desktop` location.

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ About

#### Author

**Ysn4Irix**

-   [GitHub Profile](https://github.com/Ysn4irix)
-   [Instagram Profile](https://instagram.com/ysn.irix)

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2022-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
