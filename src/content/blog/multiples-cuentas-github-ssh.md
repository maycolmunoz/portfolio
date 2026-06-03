Si trabajas con una cuenta personal y otra profesional en GitHub, configurar ambas mediante SSH evita tener que cambiar credenciales constantemente y facilita la gestión de repositorios.

## Generar una clave SSH para cada cuenta

Lo recomendable es crear una clave independiente para cada cuenta.

```bash
ssh-keygen -t ed25519 -C "personal@email.com" -f ~/.ssh/id_ed25519_github_personal

ssh-keygen -t ed25519 -C "work@email.com" -f ~/.ssh/id_ed25519_github_work
```

## Agregar las claves al ssh-agent

Una vez creadas, deben cargarse en el agente SSH para que puedan utilizarse automáticamente.

```bash
eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519_github_personal
ssh-add ~/.ssh/id_ed25519_github_work
```

## Registrar las claves en GitHub

Cada clave pública debe agregarse en la cuenta correspondiente desde **Settings → SSH and GPG keys**.

```bash
cat ~/.ssh/id_ed25519_github_personal.pub
cat ~/.ssh/id_ed25519_github_work.pub
```

## Configurar hosts personalizados

Edita o crea el archivo `~/.ssh/config` y define un alias para cada cuenta.

```ssh
# Cuenta personal
Host github-personal
    HostName ssh.github.com
    User git
    Port 443
    IdentityFile ~/.ssh/id_ed25519_github_personal

# Cuenta de trabajo
Host github-work
    HostName ssh.github.com
    User git
    Port 443
    IdentityFile ~/.ssh/id_ed25519_github_work
```

De esta forma SSH sabrá qué clave utilizar según el host que se indique.

## Clonar repositorios

Al trabajar con un repositorio, simplemente utiliza el alias correspondiente.

```bash
git clone git@github-personal:usuario/repositorio.git
git clone git@github-work:empresa/repositorio.git
```

## Configurar la identidad de Git

Para evitar que los commits se firmen con el correo equivocado, configura el usuario y correo dentro de cada repositorio.

```bash
git config user.name "Tu Nombre"
git config user.email "tu@email.com"
```

## Verificar la configuración

Puedes comprobar que cada alias utiliza la cuenta correcta ejecutando:

```bash
ssh -T git@github-personal
ssh -T git@github-work
```

Si la configuración es correcta, GitHub mostrará un mensaje indicando la cuenta con la que te has autenticado.

## Conclusión

Mantener una clave SSH independiente para cada cuenta de GitHub permite separar entornos personales y profesionales, evitar errores de autenticación y trabajar con múltiples identidades de forma transparente desde la misma máquina.
