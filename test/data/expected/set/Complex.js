module.exports = function() {
    return {
        toOnly: {
            setPathSets: {
                count: 2,
                query: [{
                    "path": ["v", {to:1}, "s"],
                    "value": "Arnold"
                }]
            },
            setPathMaps: {
                count: 2,
                query: [{
                    json: {
                        v: {
                            0: {
                                s: "Arnold"
                            },
                            1: {
                                s: "Arnold"
                            }
                        }
                    }
                }]
            },
            setJSONGs: {
                count: 2,
                query: [{
                    jsong: {
                        v: {
                            0: {
                                s: "Arnold"
                            },
                            1: {
                                s: "Arnold"
                            }
                        }
                    },
                    paths: [
                        ["v", {to:1}, "s"]
                    ]
                }]
            },

            optimizedPaths: [
                ["v", 0, "s"],
                ["v", 1, "s"]
            ],
            requestedPaths: [
                ["v", 0, "s"],
                ["v", 1, "s"]
            ],

            AsValues: {
                values: [{
                    "path": ["v", 0, "s"],
                    "value": "Arnold"
                }, {
                    "path": ["v", 1, "s"],
                    "value": "Arnold"
                }]
            },

            AsJSON: {
                values: [{
                    json: {
                        0: "Arnold",
                        1: "Arnold"
                    }
                }]
            },

            AsJSONG: {
                values: [{
                    jsong: {
                        "v": {
                            "0": {
                                "s": "Arnold"
                            },
                            "1": {
                                "s": "Arnold"
                            }
                        }
                    },
                    "paths": [
                        ["v", 0, "s"],
                        ["v", 1, "s"]
                    ]
                }]
            },

            AsPathMap: {
                values: [{
                    json: {
                        "v": {
                            "0": {
                                "s": "Arnold"
                            },
                            "1": {
                                "s": "Arnold"
                            }
                        }
                    }
                }]
            }
        },
        fromOnly: {
            setPathSets: {
                query: [{
                    "path": ["v", {from:0}, "s"],
                    "value": "Arnold"
                }]
            },
            optimizedPaths: [
                ["v", 0, "s"]
            ],
            requestedPaths: [
                ["v", 0, "s"]
            ],

            AsValues: {
                values: [{
                    "path": ["v", 0, "s"],
                    "value": "Arnold"
                }]
            },

            AsJSON: {
                values: [{
                    json: {
                        0: "Arnold"
                    }
                }]
            },

            AsJSONG: {
                values: [{
                    jsong: {
                        "v": {
                            "0": {
                                "s": "Arnold"
                            }
                        }
                    },
                    "paths": [
                        ["v", 0, "s"]
                    ]
                }]
            },

            AsPathMap: {
                values: [{
                    json: {
                        "v": {
                            "0": {
                                "s": "Arnold"
                            }
                        }
                    }
                }]
            }
        },
        fromAndTo: {
            setPathSets: {
                count: 3,
                query: [{
                    "path": ["v", {from:-1, to:1}, "s"],
                    "value": "Arnold"
                }]
            },

            optimizedPaths: [
                ["v", -1, "s"],
                ["v", 0, "s"],
                ["v", 1, "s"]
            ],
            requestedPaths: [
                ["v", -1, "s"],
                ["v", 0, "s"],
                ["v", 1, "s"]
            ],

            AsValues: {
                values: [{
                    "path": ["v", -1, "s"],
                    "value": "Arnold"
                }, {
                    "path": ["v", 0, "s"],
                    "value": "Arnold"
                }, {
                    "path": ["v", 1, "s"],
                    "value": "Arnold"
                }]
            },

            AsJSON: {
                values: [{
                    json: {
                        "-1": "Arnold",
                        0: "Arnold",
                        1: "Arnold"
                    }
                }]
            },

            AsJSONG: {
                values: [{
                    jsong: {
                        "v": {
                            "-1": {
                                "s": "Arnold"
                            },
                            "0": {
                                "s": "Arnold"
                            },
                            "1": {
                                "s": "Arnold"
                            }
                        }
                    },
                    "paths": [
                        ["v", -1, "s"],
                        ["v", 0, "s"],
                        ["v", 1, "s"]
                    ]
                }]
            },

            AsPathMap: {
                values: [{
                    json: {
                        "v": {
                            "-1": {
                                "s": "Arnold"
                            },
                            "0": {
                                "s": "Arnold"
                            },
                            "1": {
                                "s": "Arnold"
                            }
                        }
                    }
                }]
            }
        },
        fromAndLength: {
            setPathSets: {
                query: [{
                    "path": ["v", {from:-1, length:3}, "s"],
                    "value": "Arnold"
                }]
            },

            optimizedPaths: [
                ["v", -1, "s"],
                ["v", 0, "s"],
                ["v", 1, "s"]
            ],
            requestedPaths: [
                ["v", -1, "s"],
                ["v", 0, "s"],
                ["v", 1, "s"]
            ],

            AsValues: {
                values: [{
                    "path": ["v", -1, "s"],
                    "value": "Arnold"
                }, {
                    "path": ["v", 0, "s"],
                    "value": "Arnold"
                }, {
                    "path": ["v", 1, "s"],
                    "value": "Arnold"
                }]
            },

            AsJSON: {
                values: [{
                    json: {
                        "-1": "Arnold",
                        0: "Arnold",
                        1: "Arnold"
                    }
                }]
            },

            AsJSONG: {
                values: [{
                    jsong: {
                        "v": {
                            "-1": {
                                "s": "Arnold"
                            },
                            "0": {
                                "s": "Arnold"
                            },
                            "1": {
                                "s": "Arnold"
                            }
                        }
                    },
                    "paths": [
                        ["v", -1, "s"],
                        ["v", 0, "s"],
                        ["v", 1, "s"]
                    ]
                }]
            },

            AsPathMap: {
                values: [{
                    json: {
                        "v": {
                            "-1": {
                                "s": "Arnold"
                            },
                            "0": {
                                "s": "Arnold"
                            },
                            "1": {
                                "s": "Arnold"
                            }
                        }
                    }
                }]
            }
        },
        toOnlyLeaf: {
            setPathSets: {
                count: 2,
                query: [{
                    "path": ["v", {to:1}],
                    "value": "Arnold"
                }]
            },
            setPathMaps: {
                count: 2,
                query: [{
                    json: {
                        v: {
                            0: "Arnold",
                            1: "Arnold"
                        }
                    }
                }]
            },
            setJSONGs: {
                count: 2,
                query: [{
                    jsong: {
                        v: {
                            0: "Arnold",
                            1: "Arnold"
                        }
                    },
                    paths: [
                        ["v", {to:1}]
                    ]
                }]
            },

            optimizedPaths: [
                ["v", 0],
                ["v", 1]
            ],
            requestedPaths: [
                ["v", 0],
                ["v", 1]
            ],

            AsValues: {
                values: [{
                    "path": ["v", 0],
                    "value": "Arnold"
                }, {
                    "path": ["v", 1],
                    "value": "Arnold"
                }]
            },

            AsJSON: {
                values: [{
                    json: {
                        0: "Arnold",
                        1: "Arnold"
                    }
                }]
            },

            AsJSONG: {
                values: [{
                    jsong: {
                        "v": {
                            "0": "Arnold",
                            "1": "Arnold"
                        }
                    },
                    "paths": [
                        ["v", 0],
                        ["v", 1]
                    ]
                }]
            },

            AsPathMap: {
                values: [{
                    json: {
                        "v": {
                            "0": "Arnold",
                            "1": "Arnold"
                        }
                    }
                }]
            }
        },
        fromOnlyLeaf: {
            setPathSets: {
                query: [{
                    "path": ["v", {from:0}],
                    "value": "Arnold"
                }]
            },
            optimizedPaths: [
                ["v", 0]
            ],
            requestedPaths: [
                ["v", 0]
            ],

            AsValues: {
                values: [{
                    "path": ["v", 0],
                    "value": "Arnold"
                }]
            },

            AsJSON: {
                values: [{
                    json: {
                        0: "Arnold"
                    }
                }]
            },

            AsJSONG: {
                values: [{
                    jsong: {
                        "v": {
                            "0": "Arnold"
                        }
                    },
                    "paths": [
                        ["v", 0]
                    ]
                }]
            },

            AsPathMap: {
                values: [{
                    json: {
                        "v": {
                            "0": "Arnold"
                        }
                    }
                }]
            }
        },
        fromAndToLeaf: {
            setPathSets: {
                count: 3,
                query: [{
                    "path": ["v", {from:-1, to:1}],
                    "value": "Arnold"
                }]
            },

            optimizedPaths: [
                ["v", -1],
                ["v", 0],
                ["v", 1]
            ],
            requestedPaths: [
                ["v", -1],
                ["v", 0],
                ["v", 1]
            ],

            AsValues: {
                values: [{
                    "path": ["v", -1],
                    "value": "Arnold"
                }, {
                    "path": ["v", 0],
                    "value": "Arnold"
                }, {
                    "path": ["v", 1],
                    "value": "Arnold"
                }]
            },

            AsJSON: {
                values: [{
                    json: {
                        "-1": "Arnold",
                        0: "Arnold",
                        1: "Arnold"
                    }
                }]
            },

            AsJSONG: {
                values: [{
                    jsong: {
                        "v": {
                            "-1": "Arnold",
                            "0": "Arnold",
                            "1": "Arnold"
                        }
                    },
                    "paths": [
                        ["v", -1],
                        ["v", 0],
                        ["v", 1]
                    ]
                }]
            },

            AsPathMap: {
                values: [{
                    json: {
                        "v": {
                            "-1": "Arnold",
                            "0": "Arnold",
                            "1": "Arnold"
                        }
                    }
                }]
            }
        },
        fromAndLengthLeaf: {
            setPathSets: {
                query: [{
                    "path": ["v", {from:-1, length:3}],
                    "value": "Arnold"
                }]
            },

            optimizedPaths: [
                ["v", -1],
                ["v", 0],
                ["v", 1]
            ],
            requestedPaths: [
                ["v", -1],
                ["v", 0],
                ["v", 1]
            ],

            AsValues: {
                values: [{
                    "path": ["v", -1],
                    "value": "Arnold"
                }, {
                    "path": ["v", 0],
                    "value": "Arnold"
                }, {
                    "path": ["v", 1],
                    "value": "Arnold"
                }]
            },

            AsJSON: {
                values: [{
                    json: {
                        "-1": "Arnold",
                        0: "Arnold",
                        1: "Arnold"
                    }
                }]
            },

            AsJSONG: {
                values: [{
                    jsong: {
                        "v": {
                            "-1": "Arnold",
                            "0": "Arnold",
                            "1": "Arnold"
                        }
                    },
                    "paths": [
                        ["v", -1],
                        ["v", 0],
                        ["v", 1]
                    ]
                }]
            },

            AsPathMap: {
                values: [{
                    json: {
                        "v": {
                            "-1": "Arnold",
                            "0": "Arnold",
                            "1": "Arnold"
                        }
                    }
                }]
            }
        }
    };
};
