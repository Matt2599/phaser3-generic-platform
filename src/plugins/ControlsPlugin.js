/* key scheme config
const config = {
    name: 'schemeName',
    type: 'keyboard/gamepad/touch',
    default: true,
    active: true,
    controls: {
        up: 'key',
        down: 'key',
        left: 'key',
        right: 'key',
        attack: 'key'
    }
} */

//TODO implement combos
//TODO add gamepad support
//TODO add standard touch controls

export default class ControlsPlugin extends Phaser.Plugins.ScenePlugin {
    constructor(scene, pluginManager) {
        super(scene, pluginManager);

        this.schemes = [];
        this.keys = [];

    }

    boot() {
        const eventEmitter = this.systems.events;

        eventEmitter.on('destroy', () => {
            //TODO clean arrays; remove everything
            this.schemes.splice(0,this.schemes.length);
            this.keys.splice(0,this.keys.length);
        }, this)
    }

    add(config) {
        //add new scheme
        this.schemes.push(config);

        //if is set to "active" then activate it
        if(config.active) {
            this.setActive(config);
        }
    }

    editScheme(scheme, config) {
        this.schemes.forEach((s, idx) => {
            if(s.name === scheme || s === scheme) {
                this.schemes[idx] = config;
            }
            if(config.active) {
                this.setActive(config);
            }
        }, this);
    }

    editKey(scheme, key, value) {
        this.schemes.forEach((s) => {
            if(s.name === scheme || s === scheme) {
                if(!s.name.includes("-edited")) {
                    const edit = JSON.parse(JSON.stringify(s));
                    edit.name = s.name.concat("-edited");
                    Object.keys(edit.controls).forEach((k) => {
                        if(k === key) {
                            console.log(k);
                            edit.controls[k] = value;
                        }
                    }, this);
                    this.schemes.push(edit);
                    if(edit.active) {
                        this.setActive(edit);
                    }
                } else {
                    Object.keys(s.controls).forEach((k) => {
                        if(k === key) {
                            k = value;
                        }
                    }, this);
                }
            }
        }, this);
    }

    reset(scheme) {
        this.schemes.forEach((s, idx) => {
            if(s.name === scheme || s === scheme) {
                if(s.name.includes("-edited")) {
                    this.schemes.forEach((sc) => {
                        if(sc.name === s.name.replace("-edited","")) {
                            this.setActive(sc);
                        }
                    }, this);
                    this.schemes.splice(idx, 1);
                }
            }
        }, this);
    }

    get(scheme) {
      let getScheme = this.schemes.find(s => s.name === scheme);
      return getScheme;
    }

    setActive(scheme) {
        const scene = this.scene;
        this.schemes.forEach((s) => {
            //set other schemes as inactive
            if(s.active) {
                s.active = false;
            }
            if(s.name === scheme || s === scheme) {
                s.active = true;
                //TODO implement keys activation
                switch(s.type) {
                    case 'keyboard':
                        this.keys = scene.input.keyboard.addKeys(s.controls);
                        break;
                    case 'gamepad':
                        break;
                    case 'touch':
                        break;
                }
            }
        }, this);
    }

    delete(scheme) {
        this.schemes.forEach((s, idx) => {
            if(s.name === scheme || s === scheme) {
                if(s.active) {
                    //select default scheme if deleted scheme was active
                    this.schemes.forEach((s,idx) => {
                        if(s.default) {
                            this.setActive(this.schemes[idx]);
                        }
                    }, this);
                }
                this.schemes.splice(idx, 1);
            }
        }, this);
    }

    //enable all the keys of the active control scheme
    enableKeys() {
        // convert keys object to an array to get each key
        let currentScheme = Object.keys(this.keys);
        currentScheme.forEach((key) => {
            this.keys[key].enabled = true;
        }, this);
    }

    //disable all the keys of the active control scheme
    disableKeys() {
        // convert keys object to an array to get each key
        let currentScheme = Object.keys(this.keys);
        currentScheme.forEach((key) => {
            this.keys[key].enabled = false;
        }, this);
    }
}