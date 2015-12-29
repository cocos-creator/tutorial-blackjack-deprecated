/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * Behavior encapsulates multiple Action callbacks that can be invoked by a single call.
     * @class Behavior
     */
    var Behavior = (function () {
        /**
         * Creates a new instance of the Behavior class.
         * @param {Behavior} behavior The copy constructor; omit this optional parameter for a simple constructor.
         */
        function Behavior(behavior) {
            this.actions = [];
            if (behavior) {
                this.push(behavior); // NOTE: this ensures a copy of the array is made
            }
        }
        /**
         * Adds an Action or set of Actions callbacks in a Behavior instance to this behavior instance.
         * @method push
         * @param {Behavior} behavior The Action or set of Actions callbacks to add to this behavior instance.
         * @returns {Behavior} Returns this behavior instance (for use in fluent style development).
         */
        Behavior.prototype.push = function (behavior) {
            Array.prototype.push.apply(this.actions, behavior instanceof Behavior ? behavior.actions : arguments);
            return this;
        };
        /**
         * Tests the Behavior instance to see if any actions have been defined.
         * @method hasActions
         * @returns {boolean} True if there are actions defined within this Behavior instance.
         */
        Behavior.prototype.hasActions = function () {
            return this.actions.length !== 0;
        };
        /**
         * Invokes all the action callbacks in this Behavior instance.
         * @method invoke
         * @param {any} message The message that triggered the transition.
         * @param {IActiveStateConfiguration} instance The state machine instance.
         * @param {boolean} history Internal use only
         */
        Behavior.prototype.invoke = function (message, instance, history) {
            if (history === void 0) { history = false; }
            this.actions.forEach(function (action) { return action(message, instance, history); });
        };
        return Behavior;
    })();
    StateJS.Behavior = Behavior;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An enumeration of static constants that dictates the precise behaviour of pseudo states.
     *
     * Use these constants as the `kind` parameter when creating new `PseudoState` instances.
     * @class PseudoStateKind
     */
    (function (PseudoStateKind) {
        /**
         * Used for pseudo states that are always the staring point when entering their parent region.
         * @member {PseudoStateKind} Initial
         */
        PseudoStateKind[PseudoStateKind["Initial"] = 0] = "Initial";
        /**
         * Used for pseudo states that are the the starting point when entering their parent region for the first time; subsequent entries will start at the last known state.
         * @member {PseudoStateKind} ShallowHistory
         */
        PseudoStateKind[PseudoStateKind["ShallowHistory"] = 1] = "ShallowHistory";
        /**
         * As per `ShallowHistory` but the history semantic cascades through all child regions irrespective of their initial pseudo state kind.
         * @member {PseudoStateKind} DeepHistory
         */
        PseudoStateKind[PseudoStateKind["DeepHistory"] = 2] = "DeepHistory";
        /**
         * Enables a dynamic conditional branches; within a compound transition.
         * All outbound transition guards from a Choice are evaluated upon entering the PseudoState:
         * if a single transition is found, it will be traversed;
         * if many transitions are found, an arbitary one will be selected and traversed;
         * if none evaluate true, and there is no 'else transition' defined, the machine is deemed illformed and an exception will be thrown.
         * @member {PseudoStateKind} Choice
         */
        PseudoStateKind[PseudoStateKind["Choice"] = 3] = "Choice";
        /**
         * Enables a static conditional branches; within a compound transition.
         * All outbound transition guards from a Choice are evaluated upon entering the PseudoState:
         * if a single transition is found, it will be traversed;
         * if many or none evaluate true, and there is no 'else transition' defined, the machine is deemed illformed and an exception will be thrown.
         * @member {PseudoStateKind} Junction
         */
        PseudoStateKind[PseudoStateKind["Junction"] = 4] = "Junction";
        /**
         * Entering a terminate `PseudoState` implies that the execution of this state machine by means of its state object is terminated.
         * @member {PseudoStateKind} Terminate
         */
        PseudoStateKind[PseudoStateKind["Terminate"] = 5] = "Terminate";
    })(StateJS.PseudoStateKind || (StateJS.PseudoStateKind = {}));
    var PseudoStateKind = StateJS.PseudoStateKind;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An enumeration of static constants that dictates the precise behaviour of transitions.
     *
     * Use these constants as the `kind` parameter when creating new `Transition` instances.
     * @class TransitionKind
     */
    (function (TransitionKind) {
        /**
         * The transition, if triggered, occurs without exiting or entering the source state.
         * Thus, it does not cause a state change. This means that the entry or exit condition of the source state will not be invoked.
         * An internal transition can be taken even if the state machine is in one or more regions nested within this state.
         * @member {TransitionKind} Internal
         */
        TransitionKind[TransitionKind["Internal"] = 0] = "Internal";
        /**
         * The transition, if triggered, will not exit the composite (source) state, but will enter the non-active target vertex ancestry.
         * @member {TransitionKind} Local
         */
        TransitionKind[TransitionKind["Local"] = 1] = "Local";
        /**
         * The transition, if triggered, will exit the source vertex.
         * @member {TransitionKind} External
         */
        TransitionKind[TransitionKind["External"] = 2] = "External";
    })(StateJS.TransitionKind || (StateJS.TransitionKind = {}));
    var TransitionKind = StateJS.TransitionKind;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An abstract class used as the base for the Region and Vertex classes.
     * An element is a node within the tree structure that represents a composite state machine model.
     * @class Element
     */
    var Element = (function () {
        /**
         * Creates a new instance of the element class.
         * @param {string} name The name of the element.
         */
        function Element(name, parent) {
            this.name = name;
            this.qualifiedName = parent ? (parent.qualifiedName + Element.namespaceSeparator + name) : name;
        }
        /**
         * Returns a the element name as a fully qualified namespace.
         * @method toString
         * @returns {string}
         */
        Element.prototype.toString = function () {
            return this.qualifiedName;
        };
        /**
         * The symbol used to separate element names within a fully qualified name.
         * Change this static member to create different styles of qualified name generated by the toString method.
         * @member {string}
         */
        Element.namespaceSeparator = ".";
        return Element;
    })();
    StateJS.Element = Element;
})(StateJS || (StateJS = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An element within a state machine model that is a container of Vertices.
     *
     * Regions are implicitly inserted into composite state machines as a container for vertices.
     * They only need to be explicitly defined if orthogonal states are required.
     *
     * Region extends the Element class and inherits its public interface.
     * @class Region
     * @augments Element
     */
    var Region = (function (_super) {
        __extends(Region, _super);
        /**
         * Creates a new instance of the Region class.
         * @param {string} name The name of the region.
         * @param {State} state The parent state that this region will be a child of.
         */
        function Region(name, state) {
            _super.call(this, name, state);
            /**
             * The set of vertices that are children of the region.
             * @member {Array<Vertex>}
             */
            this.vertices = [];
            this.state = state;
            this.state.regions.push(this);
            this.state.getRoot().clean = false;
        }
        /**
         * Returns the root element within the state machine model.
         * @method getRoot
         * @returns {StateMachine} The root state machine element.
         */
        Region.prototype.getRoot = function () {
            return this.state.getRoot();
        };
        /**
         * Accepts an instance of a visitor and calls the visitRegion method on it.
         * @method accept
         * @param {Visitor<TArg1>} visitor The visitor instance.
         * @param {TArg1} arg1 An optional argument to pass into the visitor.
         * @param {any} arg2 An optional argument to pass into the visitor.
         * @param {any} arg3 An optional argument to pass into the visitor.
         * @returns {any} Any value can be returned by the visitor.
         */
        Region.prototype.accept = function (visitor, arg1, arg2, arg3) {
            return visitor.visitRegion(this, arg1, arg2, arg3);
        };
        /**
         * The name given to regions that are are created automatically when a state is passed as a vertex's parent.
         * Regions are automatically inserted into state machine models as the composite structure is built; they are named using this static member.
         * Update this static member to use a different name for default regions.
         * @member {string}
         */
        Region.defaultName = "default";
        return Region;
    })(StateJS.Element);
    StateJS.Region = Region;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An abstract element within a state machine model that can be the source or target of a transition (states and pseudo states).
     *
     * Vertex extends the Element class and inherits its public interface.
     * @class Vertex
     * @augments Element
     */
    var Vertex = (function (_super) {
        __extends(Vertex, _super);
        /**
         * Creates a new instance of the Vertex class.
         * @param {string} name The name of the vertex.
         * @param {Element} parent The parent region or state.
         */
        function Vertex(name, parent) {
            _super.call(this, name, parent = (parent instanceof StateJS.State ? parent.defaultRegion() : parent)); // TODO: find a cleaner way to manage implicit conversion
            /**
             * The set of transitions from this vertex.
             * @member {Array<Transition>}
             */
            this.outgoing = [];
            this.region = parent; // NOTE: parent will be a Region due to the conditional logic in the super call above
            if (this.region) {
                this.region.vertices.push(this);
                this.region.getRoot().clean = false;
            }
        }
        /**
         * Returns the root element within the state machine model.
         * @method getRoot
         * @returns {StateMachine} The root state machine element.
         */
        Vertex.prototype.getRoot = function () {
            return this.region.getRoot(); // NOTE: need to keep this dynamic as a state machine may be embedded within another
        };
        /**
         * Creates a new transition from this vertex.
         * Newly created transitions are completion transitions; they will be evaluated after a vertex has been entered if it is deemed to be complete.
         * Transitions can be converted to be event triggered by adding a guard condition via the transitions `where` method.
         * @method to
         * @param {Vertex} target The destination of the transition; omit for internal transitions.
         * @param {TransitionKind} kind The kind the transition; use this to set Local or External (the default if omitted) transition semantics.
         * @returns {Transition} The new transition object.
         */
        Vertex.prototype.to = function (target, kind) {
            if (kind === void 0) { kind = StateJS.TransitionKind.External; }
            return new StateJS.Transition(this, target, kind);
        };
        /**
         * Accepts an instance of a visitor.
         * @method accept
         * @param {Visitor<TArg>} visitor The visitor instance.
         * @param {TArg} arg An optional argument to pass into the visitor.
         * @returns {any} Any value can be returned by the visitor.
         */
        Vertex.prototype.accept = function (visitor, arg1, arg2, arg3) { };
        return Vertex;
    })(StateJS.Element);
    StateJS.Vertex = Vertex;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An element within a state machine model that represents an transitory Vertex within the state machine model.
     *
     * Pseudo states are required in all state machine models; at the very least, an `Initial` pseudo state is the default stating state when the parent region is entered.
     * Other types of pseudo state are available; typically for defining history semantics or to facilitate more complex transitions.
     * A `Terminate` pseudo state kind is also available to immediately terminate processing within the entire state machine instance.
     *
     * PseudoState extends the Vertex class and inherits its public interface.
     * @class PseudoState
     * @augments Vertex
     */
    var PseudoState = (function (_super) {
        __extends(PseudoState, _super);
        /**
         * Creates a new instance of the PseudoState class.
         * @param {string} name The name of the pseudo state.
         * @param {Element} parent The parent element that this pseudo state will be a child of.
         * @param {PseudoStateKind} kind Determines the behaviour of the PseudoState.
         */
        function PseudoState(name, parent, kind) {
            if (kind === void 0) { kind = StateJS.PseudoStateKind.Initial; }
            _super.call(this, name, parent);
            this.kind = kind;
        }
        /**
         * Tests a pseudo state to determine if it is a history pseudo state.
         * History pseudo states are of kind: Initial, ShallowHisory, or DeepHistory.
         * @method isHistory
         * @returns {boolean} True if the pseudo state is a history pseudo state.
         */
        PseudoState.prototype.isHistory = function () {
            return this.kind === StateJS.PseudoStateKind.DeepHistory || this.kind === StateJS.PseudoStateKind.ShallowHistory;
        };
        /**
         * Tests a pseudo state to determine if it is an initial pseudo state.
         * Initial pseudo states are of kind: Initial, ShallowHisory, or DeepHistory.
         * @method isInitial
         * @returns {boolean} True if the pseudo state is an initial pseudo state.
         */
        PseudoState.prototype.isInitial = function () {
            return this.kind === StateJS.PseudoStateKind.Initial || this.isHistory();
        };
        /**
         * Accepts an instance of a visitor and calls the visitPseudoState method on it.
         * @method accept
         * @param {Visitor<TArg1>} visitor The visitor instance.
         * @param {TArg1} arg1 An optional argument to pass into the visitor.
         * @param {any} arg2 An optional argument to pass into the visitor.
         * @param {any} arg3 An optional argument to pass into the visitor.
         * @returns {any} Any value can be returned by the visitor.
         */
        PseudoState.prototype.accept = function (visitor, arg1, arg2, arg3) {
            return visitor.visitPseudoState(this, arg1, arg2, arg3);
        };
        return PseudoState;
    })(StateJS.Vertex);
    StateJS.PseudoState = PseudoState;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An element within a state machine model that represents an invariant condition within the life of the state machine instance.
     *
     * States are one of the fundamental building blocks of the state machine model.
     * Behaviour can be defined for both state entry and state exit.
     *
     * State extends the Vertex class and inherits its public interface.
     * @class State
     * @augments Vertex
     */
    var State = (function (_super) {
        __extends(State, _super);
        /**
         * Creates a new instance of the State class.
         * @param {string} name The name of the state.
         * @param {Element} parent The parent state that owns the state.
         */
        function State(name, parent) {
            _super.call(this, name, parent);
            // user defined behaviour (via exit method) to execute when exiting a state.
            this.exitBehavior = new StateJS.Behavior();
            // user defined behaviour (via entry method) to execute when entering a state.
            this.entryBehavior = new StateJS.Behavior();
            /**
             * The set of regions under this state.
             * @member {Array<Region>}
             */
            this.regions = [];
        }
        /**
         * Returns the default region for the state.
         * Note, this will create the default region if it does not already exist.
         * @method defaultRegion
         * @returns {Region} The default region.
         */
        State.prototype.defaultRegion = function () {
            return this.regions.reduce(function (result, region) { return region.name === StateJS.Region.defaultName ? region : result; }, undefined) || new StateJS.Region(StateJS.Region.defaultName, this);
        };
        /**
         * Tests the state to see if it is a final state;
         * a final state is one that has no outbound transitions.
         * @method isFinal
         * @returns {boolean} True if the state is a final state.
         */
        State.prototype.isFinal = function () {
            return this.outgoing.length === 0;
        };
        /**
         * Tests the state to see if it is a simple state;
         * a simple state is one that has no child regions.
         * @method isSimple
         * @returns {boolean} True if the state is a simple state.
         */
        State.prototype.isSimple = function () {
            return this.regions.length === 0;
        };
        /**
         * Tests the state to see if it is a composite state;
         * a composite state is one that has one or more child regions.
         * @method isComposite
         * @returns {boolean} True if the state is a composite state.
         */
        State.prototype.isComposite = function () {
            return this.regions.length > 0;
        };
        /**
         * Tests the state to see if it is an orthogonal state;
         * an orthogonal state is one that has two or more child regions.
         * @method isOrthogonal
         * @returns {boolean} True if the state is an orthogonal state.
         */
        State.prototype.isOrthogonal = function () {
            return this.regions.length > 1;
        };
        /**
         * Adds behaviour to a state that is executed each time the state is exited.
         * @method exit
         * @param {Action} exitAction The action to add to the state's exit behaviour.
         * @returns {State} Returns the state to allow a fluent style API.
         */
        State.prototype.exit = function (exitAction) {
            this.exitBehavior.push(exitAction);
            this.getRoot().clean = false;
            return this;
        };
        /**
         * Adds behaviour to a state that is executed each time the state is entered.
         * @method entry
         * @param {Action} entryAction The action to add to the state's entry behaviour.
         * @returns {State} Returns the state to allow a fluent style API.
         */
        State.prototype.entry = function (entryAction) {
            this.entryBehavior.push(entryAction);
            this.getRoot().clean = false;
            return this;
        };
        /**
         * Accepts an instance of a visitor and calls the visitState method on it.
         * @method accept
         * @param {Visitor<TArg1>} visitor The visitor instance.
         * @param {TArg1} arg1 An optional argument to pass into the visitor.
         * @param {any} arg2 An optional argument to pass into the visitor.
         * @param {any} arg3 An optional argument to pass into the visitor.
         * @returns {any} Any value can be returned by the visitor.
         */
        State.prototype.accept = function (visitor, arg1, arg2, arg3) {
            return visitor.visitState(this, arg1, arg2, arg3);
        };
        return State;
    })(StateJS.Vertex);
    StateJS.State = State;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An element within a state machine model that represents completion of the life of the containing Region within the state machine instance.
     *
     * A final state cannot have outbound transitions.
     *
     * FinalState extends the State class and inherits its public interface.
     * @class FinalState
     * @augments State
     */
    var FinalState = (function (_super) {
        __extends(FinalState, _super);
        /**
         * Creates a new instance of the FinalState class.
         * @param {string} name The name of the final state.
         * @param {Element} parent The parent element that owns the final state.
         */
        function FinalState(name, parent) {
            _super.call(this, name, parent);
        }
        /**
         * Accepts an instance of a visitor and calls the visitFinalState method on it.
         * @method accept
         * @param {Visitor<TArg>} visitor The visitor instance.
         * @param {TArg} arg An optional argument to pass into the visitor.
         * @returns {any} Any value can be returned by the visitor.
         */
        FinalState.prototype.accept = function (visitor, arg1, arg2, arg3) {
            return visitor.visitFinalState(this, arg1, arg2, arg3);
        };
        return FinalState;
    })(StateJS.State);
    StateJS.FinalState = FinalState;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * An element within a state machine model that represents the root of the state machine model.
     *
     * StateMachine extends the State class and inherits its public interface.
     * @class StateMachine
     * @augments State
     */
    var StateMachine = (function (_super) {
        __extends(StateMachine, _super);
        /**
         * Creates a new instance of the StateMachine class.
         * @param {string} name The name of the state machine.
         */
        function StateMachine(name) {
            _super.call(this, name, undefined);
            // flag used to indicate that the state machine model has has structural changes and therefore requires initialising.
            this.clean = false;
        }
        /**
         * Returns the root element within the state machine model.
         * Note that if this state machine is embeded within another state machine, the ultimate root element will be returned.
         * @method getRoot
         * @returns {StateMachine} The root state machine element.
         */
        StateMachine.prototype.getRoot = function () {
            return this.region ? this.region.getRoot() : this;
        };
        /**
         * Accepts an instance of a visitor and calls the visitStateMachine method on it.
         * @method accept
         * @param {Visitor<TArg1>} visitor The visitor instance.
         * @param {TArg1} arg1 An optional argument to pass into the visitor.
         * @param {any} arg2 An optional argument to pass into the visitor.
         * @param {any} arg3 An optional argument to pass into the visitor.
         * @returns {any} Any value can be returned by the visitor.
         */
        StateMachine.prototype.accept = function (visitor, arg1, arg2, arg3) {
            return visitor.visitStateMachine(this, arg1, arg2, arg3);
        };
        return StateMachine;
    })(StateJS.State);
    StateJS.StateMachine = StateMachine;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * A transition between vertices (states or pseudo states) that may be traversed in response to a message.
     *
     * Transitions come in a variety of types:
     * internal transitions respond to messages but do not cause a state transition, they only have behaviour;
     * local transitions are contained within a single region therefore the source vertex is exited, the transition traversed, and the target state entered;
     * external transitions are more complex in nature as they cross region boundaries, all elements up to but not not including the common ancestor are exited and entered.
     *
     * Entering a composite state will cause the entry of the child regions within the composite state; this in turn may trigger more transitions.
     * @class Transition
     */
    var Transition = (function () {
        /**
         * Creates a new instance of the Transition class.
         * @param {Vertex} source The source of the transition.
         * @param {Vertex} source The target of the transition; this is an optional parameter, omitting it will create an Internal transition.
         * @param {TransitionKind} kind The kind the transition; use this to set Local or External (the default if omitted) transition semantics.
         */
        function Transition(source, target, kind) {
            var _this = this;
            if (kind === void 0) { kind = StateJS.TransitionKind.External; }
            // user defined behaviour (via effect) executed when traversing this transition.
            this.transitionBehavior = new StateJS.Behavior();
            // the collected actions to perform when traversing the transition (includes exiting states, traversal, and state entry)
            this.onTraverse = new StateJS.Behavior();
            this.source = source;
            this.target = target;
            this.kind = target ? kind : StateJS.TransitionKind.Internal;
            this.guard = source instanceof StateJS.PseudoState ? Transition.TrueGuard : (function (message) { return message === _this.source; });
            this.source.outgoing.push(this);
            this.source.getRoot().clean = false;
        }
        /**
         * Turns a transition into an else transition.
         *
         * Else transitions can be used at `Junction` or `Choice` pseudo states if no other transition guards evaluate true, an Else transition if present will be traversed.
         * @method else
         * @returns {Transition} Returns the transition object to enable the fluent API.
         */
        Transition.prototype.else = function () {
            this.guard = Transition.FalseGuard;
            return this;
        };
        /**
         * Defines the guard condition for the transition.
         * @method when
         * @param {Guard} guard The guard condition that must evaluate true for the transition to be traversed.
         * @returns {Transition} Returns the transition object to enable the fluent API.
         */
        Transition.prototype.when = function (guard) {
            this.guard = guard;
            return this;
        };
        /**
         * Add behaviour to a transition.
         * @method effect
         * @param {Action} transitionAction The action to add to the transitions traversal behaviour.
         * @returns {Transition} Returns the transition object to enable the fluent API.
         */
        Transition.prototype.effect = function (transitionAction) {
            this.transitionBehavior.push(transitionAction);
            this.source.getRoot().clean = false;
            return this;
        };
        /**
         * Accepts an instance of a visitor and calls the visitTransition method on it.
         * @method accept
         * @param {Visitor<TArg1>} visitor The visitor instance.
         * @param {TArg1} arg1 An optional argument to pass into the visitor.
         * @param {any} arg2 An optional argument to pass into the visitor.
         * @param {any} arg3 An optional argument to pass into the visitor.
         * @returns {any} Any value can be returned by the visitor.
         */
        Transition.prototype.accept = function (visitor, arg1, arg2, arg3) {
            return visitor.visitTransition(this, arg1, arg2, arg3);
        };
        /**
         * Returns a the transition name.
         * @method toString
         * @returns {string}
         */
        Transition.prototype.toString = function () {
            return "[" + (this.target ? (this.source + " -> " + this.target) : this.source) + "]";
        };
        // the default guard condition for pseudo states
        Transition.TrueGuard = function () { return true; };
        // used as the guard condition for else tranitions
        Transition.FalseGuard = function () { return false; };
        return Transition;
    })();
    StateJS.Transition = Transition;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * Implementation of a visitor pattern.
     * @class Visitor
     */
    var Visitor = (function () {
        function Visitor() {
        }
        /**
         * Visits an element within a state machine model.
         * @method visitElement
         * @param {Element} element the element being visited.
         * @param {TArg1} arg1 An optional parameter passed into the accept method.
         * @param {any} arg2 An optional parameter passed into the accept method.
         * @param {any} arg3 An optional parameter passed into the accept method.
         * @returns {any} Any value may be returned when visiting an element.
         */
        Visitor.prototype.visitElement = function (element, arg1, arg2, arg3) {
        };
        /**
         * Visits a region within a state machine model.
         * @method visitRegion
         * @param {Region} region The region being visited.
         * @param {TArg1} arg1 An optional parameter passed into the accept method.
         * @param {any} arg2 An optional parameter passed into the accept method.
         * @param {any} arg3 An optional parameter passed into the accept method.
         * @returns {any} Any value may be returned when visiting an element.
         */
        Visitor.prototype.visitRegion = function (region, arg1, arg2, arg3) {
            var _this = this;
            var result = this.visitElement(region, arg1, arg2, arg3);
            region.vertices.forEach(function (vertex) { vertex.accept(_this, arg1, arg2, arg3); });
            return result;
        };
        /**
         * Visits a vertex within a state machine model.
         * @method visitVertex
         * @param {Vertex} vertex The vertex being visited.
         * @param {TArg1} arg1 An optional parameter passed into the accept method.
         * @param {any} arg2 An optional parameter passed into the accept method.
         * @param {any} arg3 An optional parameter passed into the accept method.
         * @returns {any} Any value may be returned when visiting an element.
         */
        Visitor.prototype.visitVertex = function (vertex, arg1, arg2, arg3) {
            var _this = this;
            var result = this.visitElement(vertex, arg1, arg2, arg3);
            vertex.outgoing.forEach(function (transition) { transition.accept(_this, arg1, arg2, arg3); });
            return result;
        };
        /**
         * Visits a pseudo state within a state machine model.
         * @method visitPseudoState
         * @param {PseudoState} pseudoState The pseudo state being visited.
         * @param {TArg1} arg1 An optional parameter passed into the accept method.
         * @param {any} arg2 An optional parameter passed into the accept method.
         * @param {any} arg3 An optional parameter passed into the accept method.
         * @returns {any} Any value may be returned when visiting an element.
         */
        Visitor.prototype.visitPseudoState = function (pseudoState, arg1, arg2, arg3) {
            return this.visitVertex(pseudoState, arg1, arg2, arg3);
        };
        /**
         * Visits a state within a state machine model.
         * @method visitState
         * @param {State} state The state being visited.
         * @param {TArg1} arg1 An optional parameter passed into the accept method.
         * @param {any} arg2 An optional parameter passed into the accept method.
         * @param {any} arg3 An optional parameter passed into the accept method.
         * @returns {any} Any value may be returned when visiting an element.
         */
        Visitor.prototype.visitState = function (state, arg1, arg2, arg3) {
            var _this = this;
            var result = this.visitVertex(state, arg1, arg2, arg3);
            state.regions.forEach(function (region) { region.accept(_this, arg1, arg2, arg3); });
            return result;
        };
        /**
         * Visits a final state within a state machine model.
         * @method visitFinal
         * @param {FinalState} finalState The final state being visited.
         * @param {TArg1} arg1 An optional parameter passed into the accept method.
         * @param {any} arg2 An optional parameter passed into the accept method.
         * @param {any} arg3 An optional parameter passed into the accept method.
         * @returns {any} Any value may be returned when visiting an element.
         */
        Visitor.prototype.visitFinalState = function (finalState, arg1, arg2, arg3) {
            return this.visitState(finalState, arg1, arg2, arg3);
        };
        /**
         * Visits a state machine within a state machine model.
         * @method visitVertex
         * @param {StateMachine} state machine The state machine being visited.
         * @param {TArg1} arg1 An optional parameter passed into the accept method.
         * @param {any} arg2 An optional parameter passed into the accept method.
         * @param {any} arg3 An optional parameter passed into the accept method.
         * @returns {any} Any value may be returned when visiting an element.
         */
        Visitor.prototype.visitStateMachine = function (stateMachine, arg1, arg2, arg3) {
            return this.visitState(stateMachine, arg1, arg2, arg3);
        };
        /**
         * Visits a transition within a state machine model.
         * @method visitTransition
         * @param {Transition} transition The transition being visited.
         * @param {TArg1} arg1 An optional parameter passed into the accept method.
         * @param {any} arg2 An optional parameter passed into the accept method.
         * @param {any} arg3 An optional parameter passed into the accept method.
         * @returns {any} Any value may be returned when visiting an element.
         */
        Visitor.prototype.visitTransition = function (transition, arg1, arg2, arg3) {
        };
        return Visitor;
    })();
    StateJS.Visitor = Visitor;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * Default working implementation of a state machine instance class.
     *
     * Implements the `IActiveStateConfiguration` interface.
     * It is possible to create other custom instance classes to manage state machine state in other ways (e.g. as serialisable JSON); just implement the same members and methods as this class.
     * @class StateMachineInstance
     * @implements IActiveStateConfiguration
     */
    var StateMachineInstance = (function () {
        /**
         * Creates a new instance of the state machine instance class.
         * @param {string} name The optional name of the state machine instance.
         */
        function StateMachineInstance(name) {
            if (name === void 0) { name = "unnamed"; }
            this.last = {};
            /**
             * Indicates that the state manchine instance reached was terminated by reaching a Terminate pseudo state.
             * @member isTerminated
             */
            this.isTerminated = false;
            this.name = name;
        }
        // Updates the last known state for a given region.
        StateMachineInstance.prototype.setCurrent = function (region, state) {
            this.last[region.qualifiedName] = state;
        };
        // Returns the last known state for a given region.
        StateMachineInstance.prototype.getCurrent = function (region) {
            return this.last[region.qualifiedName];
        };
        /**
         * Returns the name of the state machine instance.
         * @method toString
         * @returns {string} The name of the state machine instance.
         */
        StateMachineInstance.prototype.toString = function () {
            return this.name;
        };
        return StateMachineInstance;
    })();
    StateJS.StateMachineInstance = StateMachineInstance;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * Sets a method to select an integer random number less than the max value passed as a parameter.
     *
     * This is only useful when a custom random number generator is required; the default implementation is fine in most circumstances.
     * @function setRandom
     * @param {function} generator A function that takes a max value and returns a random number between 0 and max - 1.
     * @returns A random number between 0 and max - 1
     */
    function setRandom(generator) {
        random = generator;
    }
    StateJS.setRandom = setRandom;
    /**
     * Returns the current method used to select an integer random number less than the max value passed as a parameter.
     *
     * This is only useful when a custom random number generator is required; the default implementation is fine in most circumstances.
     * @function getRandom
     * @returns {function} The function that takes a max value and returns a random number between 0 and max - 1.
     */
    function getRandom() {
        return random;
    }
    StateJS.getRandom = getRandom;
    // the default method used to produce a random number; defaulting to simplified implementation seen in Mozilla Math.random() page; may be overriden for testing
    var random = function (max) {
        return Math.floor(Math.random() * max);
    };
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * Determines if an element is currently active; that it has been entered but not yet exited.
     * @function isActive
     * @param {Element} element The state to test.
     * @param {IActiveStateConfiguration} instance The instance of the state machine model.
     * @returns {boolean} True if the element is active.
     */
    function isActive(element, stateMachineInstance) {
        if (element instanceof StateJS.Region) {
            return isActive(element.state, stateMachineInstance);
        }
        else if (element instanceof StateJS.State) {
            return element.region ? (isActive(element.region, stateMachineInstance) && (stateMachineInstance.getCurrent(element.region) === element)) : true;
        }
    }
    StateJS.isActive = isActive;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * Tests an element within a state machine instance to see if its lifecycle is complete.
     * @function isComplete
     * @param {Element} element The element to test.
     * @param {IActiveStateConfiguration} instance The instance of the state machine model to test for completeness.
     * @returns {boolean} True if the element is complete.
     */
    function isComplete(element, instance) {
        if (element instanceof StateJS.Region) {
            return instance.getCurrent(element).isFinal();
        }
        else if (element instanceof StateJS.State) {
            return element.regions.every(function (region) { return isComplete(region, instance); });
        }
        return true;
    }
    StateJS.isComplete = isComplete;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * Initialises a state machine and/or state machine model.
     *
     * Passing just the state machine model will initialise the model, passing the model and instance will initialse the instance and if necessary, the model.
     * @function initialise
     * @param {StateMachine} stateMachineModel The state machine model. If autoInitialiseModel is true (or no instance is specified) and the model has changed, the model will be initialised.
     * @param {IActiveStateConfiguration} stateMachineInstance The optional state machine instance to initialise.
     * @param {boolean} autoInitialiseModel Defaulting to true, this will cause the model to be initialised prior to initialising the instance if the model has changed.
     */
    function initialise(stateMachineModel, stateMachineInstance, autoInitialiseModel) {
        if (autoInitialiseModel === void 0) { autoInitialiseModel = true; }
        if (stateMachineInstance) {
            // initialise the state machine model if necessary
            if (autoInitialiseModel && stateMachineModel.clean === false) {
                initialise(stateMachineModel);
            }
            // log as required
            StateJS.console.log("initialise " + stateMachineInstance);
            // enter the state machine instance for the first time
            stateMachineModel.onInitialise.invoke(undefined, stateMachineInstance);
        }
        else {
            // log as required
            StateJS.console.log("initialise " + stateMachineModel.name);
            // initialise the state machine model
            stateMachineModel.accept(new InitialiseElements(), false);
            stateMachineModel.clean = true;
        }
    }
    StateJS.initialise = initialise;
    /**
     * Passes a message to a state machine for evaluation; messages trigger state transitions.
     * @function evaluate
     * @param {StateMachine} stateMachineModel The state machine model. If autoInitialiseModel is true (or no instance is specified) and the model has changed, the model will be initialised.
     * @param {IActiveStateConfiguration} stateMachineInstance The instance of the state machine model to evaluate the message against.
     * @param {boolean} autoInitialiseModel Defaulting to true, this will cause the model to be initialised prior to initialising the instance if the model has changed.
     * @returns {boolean} True if the message triggered a state transition.
     */
    function evaluate(stateMachineModel, stateMachineInstance, message, autoInitialiseModel) {
        if (autoInitialiseModel === void 0) { autoInitialiseModel = true; }
        // log as required
        StateJS.console.log(stateMachineInstance + " evaluate " + message);
        // initialise the state machine model if necessary
        if (autoInitialiseModel && stateMachineModel.clean === false) {
            initialise(stateMachineModel);
        }
        // terminated state machine instances will not evaluate messages
        if (stateMachineInstance.isTerminated) {
            return false;
        }
        return evaluateState(stateMachineModel, stateMachineInstance, message);
    }
    StateJS.evaluate = evaluate;
    // evaluates messages against a state, executing transitions as appropriate
    function evaluateState(state, stateMachineInstance, message) {
        var result = false;
        // delegate to child regions first
        state.regions.every(function (region) {
            if (evaluateState(stateMachineInstance.getCurrent(region), stateMachineInstance, message)) {
                result = true;
                return StateJS.isActive(state, stateMachineInstance); // NOTE: this just controls the every loop; also isActive is a litte costly so using sparingly
            }
            return true; // NOTE: this just controls the every loop
        });
        // if a transition occured in a child region, check for completions
        if (result) {
            if ((message !== state) && StateJS.isComplete(state, stateMachineInstance)) {
                evaluateState(state, stateMachineInstance, state);
            }
        }
        else {
            // otherwise look for a transition from this state
            var transitions = state.outgoing.filter(function (transition) { return transition.guard(message, stateMachineInstance); });
            if (transitions.length === 1) {
                // execute if a single transition was found
                result = traverse(transitions[0], stateMachineInstance, message);
            }
            else if (transitions.length > 1) {
                // error if multiple transitions evaluated true
                StateJS.console.error(state + ": multiple outbound transitions evaluated true for message " + message);
            }
        }
        return result;
    }
    // traverses a transition
    function traverse(transition, instance, message) {
        var onTraverse = new StateJS.Behavior(transition.onTraverse), target = transition.target;
        // process static conditional branches
        while (target && target instanceof StateJS.PseudoState && target.kind === StateJS.PseudoStateKind.Junction) {
            target = (transition = selectTransition(target, instance, message)).target;
            // concatenate behaviour before and after junctions
            onTraverse.push(transition.onTraverse);
        }
        // execute the transition behaviour
        onTraverse.invoke(message, instance);
        // process dynamic conditional branches
        if (target && (target instanceof StateJS.PseudoState) && (target.kind === StateJS.PseudoStateKind.Choice)) {
            traverse(selectTransition(target, instance, message), instance, message);
        }
        else if (target && target instanceof StateJS.State && StateJS.isComplete(target, instance)) {
            // test for completion transitions
            evaluateState(target, instance, target);
        }
        return true;
    }
    // select next leg of composite transitions after choice and junction pseudo states
    function selectTransition(pseudoState, stateMachineInstance, message) {
        var results = pseudoState.outgoing.filter(function (transition) { return transition.guard(message, stateMachineInstance); });
        if (pseudoState.kind === StateJS.PseudoStateKind.Choice) {
            return results.length !== 0 ? results[StateJS.getRandom()(results.length)] : findElse(pseudoState);
        }
        else {
            if (results.length > 1) {
                StateJS.console.error("Multiple outbound transition guards returned true at " + this + " for " + message);
            }
            else {
                return results[0] || findElse(pseudoState);
            }
        }
    }
    // look for else transitins from a junction or choice
    function findElse(pseudoState) {
        return pseudoState.outgoing.filter(function (transition) { return transition.guard === StateJS.Transition.FalseGuard; })[0];
    }
    // functions to retreive specif element behavior
    function leave(elementBehavior) { return elementBehavior[0] || (elementBehavior[0] = new StateJS.Behavior()); }
    function beginEnter(elementBehavior) { return elementBehavior[1] || (elementBehavior[1] = new StateJS.Behavior()); }
    function endEnter(elementBehavior) { return elementBehavior[2] || (elementBehavior[2] = new StateJS.Behavior()); }
    function enter(elementBehavior) { return new StateJS.Behavior(beginEnter(elementBehavior)).push(endEnter(elementBehavior)); }
    // get all the vertex ancestors of a vertex (including the vertex itself)
    function ancestors(vertex) {
        return (vertex.region ? ancestors(vertex.region.state) : []).concat(vertex);
    }
    // determine the type of transition and use the appropriate initiliasition method
    var InitialiseTransitions = (function (_super) {
        __extends(InitialiseTransitions, _super);
        function InitialiseTransitions() {
            _super.apply(this, arguments);
        }
        InitialiseTransitions.prototype.visitTransition = function (transition, behaviour) {
            if (transition.kind === StateJS.TransitionKind.Internal) {
                transition.onTraverse.push(transition.transitionBehavior);
            }
            else if (transition.kind === StateJS.TransitionKind.Local) {
                this.visitLocalTransition(transition, behaviour);
            }
            else {
                this.visitExternalTransition(transition, behaviour);
            }
        };
        // initialise internal transitions: these do not leave the source state
        InitialiseTransitions.prototype.visitLocalTransition = function (transition, behaviour) {
            var _this = this;
            transition.onTraverse.push(function (message, instance) {
                var targetAncestors = ancestors(transition.target), i = 0;
                // find the first inactive element in the target ancestry
                while (StateJS.isActive(targetAncestors[i], instance)) {
                    ++i;
                }
                // exit the active sibling
                leave(behaviour(instance.getCurrent(targetAncestors[i].region))).invoke(message, instance);
                // perform the transition action;
                transition.transitionBehavior.invoke(message, instance);
                // enter the target ancestry
                while (i < targetAncestors.length) {
                    _this.cascadeElementEntry(transition, behaviour, targetAncestors[i++], targetAncestors[i], function (behavior) { behavior.invoke(message, instance); });
                }
                // trigger cascade
                endEnter(behaviour(transition.target)).invoke(message, instance);
            });
        };
        // initialise external transitions: these are abritarily complex
        InitialiseTransitions.prototype.visitExternalTransition = function (transition, behaviour) {
            var sourceAncestors = ancestors(transition.source), targetAncestors = ancestors(transition.target), i = Math.min(sourceAncestors.length, targetAncestors.length) - 1;
            // find the index of the first uncommon ancestor (or for external transitions, the source)
            while (sourceAncestors[i - 1] !== targetAncestors[i - 1]) {
                --i;
            }
            // leave source ancestry as required
            transition.onTraverse.push(leave(behaviour(sourceAncestors[i])));
            // perform the transition effect
            transition.onTraverse.push(transition.transitionBehavior);
            // enter the target ancestry
            while (i < targetAncestors.length) {
                this.cascadeElementEntry(transition, behaviour, targetAncestors[i++], targetAncestors[i], function (behavior) { return transition.onTraverse.push(behavior); });
            }
            // trigger cascade
            transition.onTraverse.push(endEnter(behaviour(transition.target)));
        };
        InitialiseTransitions.prototype.cascadeElementEntry = function (transition, behaviour, element, next, task) {
            task(beginEnter(behaviour(element)));
            if (next && element instanceof StateJS.State) {
                element.regions.forEach(function (region) {
                    task(beginEnter(behaviour(region)));
                    if (region !== next.region) {
                        task(endEnter(behaviour(region)));
                    }
                });
            }
        };
        return InitialiseTransitions;
    })(StateJS.Visitor);
    // bootstraps all the elements within a state machine model
    var InitialiseElements = (function (_super) {
        __extends(InitialiseElements, _super);
        function InitialiseElements() {
            _super.apply(this, arguments);
            this.behaviours = {};
        }
        InitialiseElements.prototype.behaviour = function (element) {
            return this.behaviours[element.qualifiedName] || (this.behaviours[element.qualifiedName] = []);
        };
        InitialiseElements.prototype.visitElement = function (element, deepHistoryAbove) {
            if (StateJS.console !== defaultConsole) {
                leave(this.behaviour(element)).push(function (message, instance) { return StateJS.console.log(instance + " leave " + element); });
                beginEnter(this.behaviour(element)).push(function (message, instance) { return StateJS.console.log(instance + " enter " + element); });
            }
        };
        InitialiseElements.prototype.visitRegion = function (region, deepHistoryAbove) {
            var _this = this;
            var regionInitial = region.vertices.reduce(function (result, vertex) { return vertex instanceof StateJS.PseudoState && vertex.isInitial() ? vertex : result; }, undefined);
            region.vertices.forEach(function (vertex) { vertex.accept(_this, deepHistoryAbove || (regionInitial && regionInitial.kind === StateJS.PseudoStateKind.DeepHistory)); });
            // leave the curent active child state when exiting the region
            leave(this.behaviour(region)).push(function (message, stateMachineInstance) { return leave(_this.behaviour(stateMachineInstance.getCurrent(region))).invoke(message, stateMachineInstance); });
            // enter the appropriate child vertex when entering the region
            if (deepHistoryAbove || !regionInitial || regionInitial.isHistory()) {
                endEnter(this.behaviour(region)).push(function (message, stateMachineInstance, history) {
                    enter(_this.behaviour((history || regionInitial.isHistory()) ? stateMachineInstance.getCurrent(region) || regionInitial : regionInitial)).invoke(message, stateMachineInstance, history || regionInitial.kind === StateJS.PseudoStateKind.DeepHistory);
                });
            }
            else {
                endEnter(this.behaviour(region)).push(enter(this.behaviour(regionInitial)));
            }
            this.visitElement(region, deepHistoryAbove);
        };
        InitialiseElements.prototype.visitPseudoState = function (pseudoState, deepHistoryAbove) {
            _super.prototype.visitPseudoState.call(this, pseudoState, deepHistoryAbove);
            // evaluate comppletion transitions once vertex entry is complete
            if (pseudoState.isInitial()) {
                endEnter(this.behaviour(pseudoState)).push(function (message, stateMachineInstance) { return traverse(pseudoState.outgoing[0], stateMachineInstance); });
            }
            else if (pseudoState.kind === StateJS.PseudoStateKind.Terminate) {
                // terminate the state machine instance upon transition to a terminate pseudo state
                beginEnter(this.behaviour(pseudoState)).push(function (message, stateMachineInstance) { return stateMachineInstance.isTerminated = true; });
            }
        };
        InitialiseElements.prototype.visitState = function (state, deepHistoryAbove) {
            var _this = this;
            // NOTE: manually iterate over the child regions to control the sequence of behaviour
            state.regions.forEach(function (region) {
                region.accept(_this, deepHistoryAbove);
                leave(_this.behaviour(state)).push(leave(_this.behaviour(region)));
                endEnter(_this.behaviour(state)).push(enter(_this.behaviour(region)));
            });
            this.visitVertex(state, deepHistoryAbove);
            // add the user defined behaviour when entering and exiting states
            leave(this.behaviour(state)).push(state.exitBehavior);
            beginEnter(this.behaviour(state)).push(state.entryBehavior);
            // update the parent regions current state
            beginEnter(this.behaviour(state)).push(function (message, stateMachineInstance) {
                if (state.region) {
                    stateMachineInstance.setCurrent(state.region, state);
                }
            });
        };
        InitialiseElements.prototype.visitStateMachine = function (stateMachine, deepHistoryAbove) {
            var _this = this;
            _super.prototype.visitStateMachine.call(this, stateMachine, deepHistoryAbove);
            // initiaise all the transitions once all the elements have been initialised
            stateMachine.accept(new InitialiseTransitions(), function (element) { return _this.behaviour(element); });
            // define the behaviour for initialising a state machine instance
            stateMachine.onInitialise = enter(this.behaviour(stateMachine));
        };
        return InitialiseElements;
    })(StateJS.Visitor);
    var defaultConsole = {
        log: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
        },
        warn: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
        },
        error: function (message) {
            var optionalParams = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                optionalParams[_i - 1] = arguments[_i];
            }
            throw message;
        }
    };
    /**
     * The object used for log, warning and error messages
     * @member {IConsole}
     */
    StateJS.console = defaultConsole;
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
var StateJS;
(function (StateJS) {
    /**
     * Validates a state machine model for correctness (see the constraints defined within the UML Superstructure specification).
     * @function validate
     * @param {StateMachine} stateMachineModel The state machine model to validate.
     */
    function validate(stateMachineModel) {
        stateMachineModel.accept(new Validator());
    }
    StateJS.validate = validate;
    function ancestors(vertex) {
        return (vertex.region ? ancestors(vertex.region.state) : []).concat(vertex);
    }
    var Validator = (function (_super) {
        __extends(Validator, _super);
        function Validator() {
            _super.apply(this, arguments);
        }
        Validator.prototype.visitPseudoState = function (pseudoState) {
            _super.prototype.visitPseudoState.call(this, pseudoState);
            if (pseudoState.kind === StateJS.PseudoStateKind.Choice || pseudoState.kind === StateJS.PseudoStateKind.Junction) {
                // [7] In a complete statemachine, a junction vertex must have at least one incoming and one outgoing transition.
                // [8] In a complete statemachine, a choice vertex must have at least one incoming and one outgoing transition.
                if (pseudoState.outgoing.length === 0) {
                    StateJS.console.error(pseudoState + ": " + pseudoState.kind + " pseudo states must have at least one outgoing transition.");
                }
                // choice and junction pseudo state can have at most one else transition
                if (pseudoState.outgoing.filter(function (transition) { return transition.guard === StateJS.Transition.FalseGuard; }).length > 1) {
                    StateJS.console.error(pseudoState + ": " + pseudoState.kind + " pseudo states cannot have more than one Else transitions.");
                }
            }
            else {
                // non choice/junction pseudo state may not have else transitions
                if (pseudoState.outgoing.filter(function (transition) { return transition.guard === StateJS.Transition.FalseGuard; }).length !== 0) {
                    StateJS.console.error(pseudoState + ": " + pseudoState.kind + " pseudo states cannot have Else transitions.");
                }
                if (pseudoState.isInitial()) {
                    if (pseudoState.outgoing.length !== 1) {
                        // [1] An initial vertex can have at most one outgoing transition.
                        // [2] History vertices can have at most one outgoing transition.
                        StateJS.console.error(pseudoState + ": initial pseudo states must have one outgoing transition.");
                    }
                    else {
                        // [9] The outgoing transition from an initial vertex may have a behavior, but not a trigger or guard.
                        if (pseudoState.outgoing[0].guard !== StateJS.Transition.TrueGuard) {
                            StateJS.console.error(pseudoState + ": initial pseudo states cannot have a guard condition.");
                        }
                    }
                }
            }
        };
        Validator.prototype.visitRegion = function (region) {
            _super.prototype.visitRegion.call(this, region);
            // [1] A region can have at most one initial vertex.
            // [2] A region can have at most one deep history vertex.
            // [3] A region can have at most one shallow history vertex.
            var initial;
            region.vertices.forEach(function (vertex) {
                if (vertex instanceof StateJS.PseudoState && vertex.isInitial()) {
                    if (initial) {
                        StateJS.console.error(region + ": regions may have at most one initial pseudo state.");
                    }
                    initial = vertex;
                }
            });
        };
        Validator.prototype.visitState = function (state) {
            _super.prototype.visitState.call(this, state);
            if (state.regions.filter(function (state) { return state.name === StateJS.Region.defaultName; }).length > 1) {
                StateJS.console.error(state + ": a state cannot have more than one region named " + StateJS.Region.defaultName);
            }
        };
        Validator.prototype.visitFinalState = function (finalState) {
            _super.prototype.visitFinalState.call(this, finalState);
            // [1] A final state cannot have any outgoing transitions.
            if (finalState.outgoing.length !== 0) {
                StateJS.console.error(finalState + ": final states must not have outgoing transitions.");
            }
            // [2] A final state cannot have regions.
            if (finalState.regions.length !== 0) {
                StateJS.console.error(finalState + ": final states must not have child regions.");
            }
            // [4] A final state has no entry behavior.
            if (finalState.entryBehavior.hasActions()) {
                StateJS.console.warn(finalState + ": final states may not have entry behavior.");
            }
            // [5] A final state has no exit behavior.
            if (finalState.exitBehavior.hasActions()) {
                StateJS.console.warn(finalState + ": final states may not have exit behavior.");
            }
        };
        Validator.prototype.visitTransition = function (transition) {
            _super.prototype.visitTransition.call(this, transition);
            // Local transition target vertices must be a child of the source vertex
            if (transition.kind === StateJS.TransitionKind.Local) {
                if (ancestors(transition.target).indexOf(transition.source) === -1) {
                    StateJS.console.error(transition + ": local transition target vertices must be a child of the source composite sate.");
                }
            }
        };
        return Validator;
    })(StateJS.Visitor);
})(StateJS || (StateJS = {}));
/*
 * Finite state machine library
 * Copyright (c) 2014-5 Steelbreeze Limited
 * Licensed under the MIT and GPL v3 licences
 * http://www.steelbreeze.net/state.cs
 */
//var module = module;
module.exports = StateJS;
