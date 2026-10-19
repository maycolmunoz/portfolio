Si utilizas una cuenta personal y otra profesional en GitHub, puedes configurar ambas mediante SSH para gestionar sus repositorios sin cambiar de credenciales constantemente.

## Generar una clave SSH para cada cuenta

Crea una clave independiente para cada cuenta:

```bash
ssh-keygen -t ed25519 -C "personal@gmail.com" -f ~/.ssh/id_ed25519_github_personal

ssh-keygen -t ed25519 -C "work@gmail.com" -f ~/.ssh/id_ed25519_github_work
```

Cada comando genera una clave privada y otra pública (`.pub`). Puedes proteger las claves privadas con una *passphrase*.

## Registrar las claves en GitHub

Muestra las claves públicas:

```bash
cat ~/.ssh/id_ed25519_github_personal.pub
cat ~/.ssh/id_ed25519_github_work.pub
```

Agrega cada una en la cuenta correspondiente desde **Settings → SSH and GPG keys → New SSH key**.

## Configurar los hosts personalizados

Edita o crea el archivo `~/.ssh/config`:

```sshconfig
# Cuenta personal
Host github-personal
    HostName ssh.github.com
    User git
    Port 443
    IdentityFile ~/.ssh/id_ed25519_github_personal
    IdentitiesOnly yes

# Cuenta de trabajo
Host github-work
    HostName ssh.github.com
    User git
    Port 443
    IdentityFile ~/.ssh/id_ed25519_github_work
    IdentitiesOnly yes
```

Los alias permiten seleccionar la clave correspondiente. El puerto 443 es una alternativa cuando la red bloquea el puerto SSH habitual (22); no es obligatorio utilizarlo.

## Agregar las claves al ssh-agent

El agente SSH es opcional si tus claves no tienen *passphrase*. Si necesitas utilizarlo:

```bash
eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_ed25519_github_personal
ssh-add ~/.ssh/id_ed25519_github_work
```

No añadas estos comandos automáticamente a `~/.bashrc` sin comprobar antes cómo gestiona tu entorno el agente SSH, ya que podrías iniciar procesos adicionales en cada terminal.

## Clonar repositorios

Utiliza el alias correspondiente a cada cuenta:

```bash
git clone git@github-personal:usuario/repositorio.git
git clone git@github-work:empresa/repositorio.git
```

Si ya tienes un repositorio clonado, puedes cambiar su remoto:

```bash
git remote set-url origin git@github-work:empresa/repositorio.git
```

Comprueba la configuración con:

```bash
git remote -v
```

## Configurar la identidad de Git

SSH determina qué cuenta de GitHub se autentica; Git utiliza `user.name` y `user.email` para identificar al autor de los commits.

Dentro de cada repositorio, configura la identidad correspondiente:

```bash
git config user.name "Tu Nombre"
git config user.email "tu@gmail.com"
```

Al no utilizar `--global`, estos valores solo se aplican al repositorio actual.

## Verificar la configuración

Comprueba que cada alias se autentica con la cuenta esperada:

```bash
ssh -T git@github-personal
ssh -T git@github-work
```

Si la conexión funciona, GitHub mostrará un mensaje similar a:

```text
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```