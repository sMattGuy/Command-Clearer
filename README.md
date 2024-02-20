# Command Clearer for Discord JS Bots
A simple command clearer designed to delete all commands in a bot. It is intended to be used on bots you would use for testing, that way you can easily remove all commands once testing is done.
## Usage
`index.js -c clientid -g guildid -t token`
### Required Arguments
|Command|Input|Description|
|---|:---:|---:|
|-c, --clientId|clientId|Your bots client ID|
|-g, --guildId|guildId|Your servers ID|
|-t, --token|token|Your bots token|
### Optional Arguments
These arguments are used optionally to control what commands are deleted. Only use one, as using both will cancel them out. By default both are `false`
|Command|Input|Description|
|---|:---:|---:|
|-s, --server-only|boolean|Clear server commands only|
|-G, --global-only|boolean|Clear global commands only|
### License
This work is marked with CC0 1.0 