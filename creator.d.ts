
/** The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace */
declare module cc {	
	/** Init Debug setting. 
	*/
	export function _initDebugSetting(mode : DebugMode) : void;	
	/** Outputs an error message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, error is red.
	- In Chrome, error have a red icon along with red message text.
	@param obj A JavaScript string containing zero or more substitution strings.
	@param subst JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output. 
	*/
	export function error(obj : any, subst : any) : void;	
	/** Outputs a warning message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, warning is yellow.
	- In Chrome, warning have a yellow warning icon with the message text.
	@param obj A JavaScript string containing zero or more substitution strings.
	@param subst JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output. 
	*/
	export function warn(obj : any, subst : any) : void;	
	/** Outputs a message to the Cocos Creator Console (editor) or Web Console (runtime).
	@param obj A JavaScript string containing zero or more substitution strings.
	@param subst JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output. 
	*/
	export function log(obj : any, subst : any) : void;	
	/** Outputs an informational message to the Cocos Creator Console (editor) or Web Console (runtime).
	- In Cocos Creator, info is blue.
	- In Firefox and Chrome, a small "i" icon is displayed next to these items in the Web Console's log.
	@param obj A JavaScript string containing zero or more substitution strings.
	@param subst JavaScript objects with which to replace substitution strings within msg. This gives you additional control over the format of the output. 
	*/
	export function info(obj : any, subst : any) : void;	
	/** Gets the current running speed. <br />
	Will get a percentage number, compared to the original speed. 
	*/
	export function getSpeed() : number;	
	/** alter the speed of the inner function in runtime. 
	*/
	export function setSpeed(speed : number) : void;	
	/** initializes the action. 
	*/
	export function initWithAction(action : ActionInterval, speed : number) : boolean;	
	/** Set inner Action. 
	*/
	export function setInnerAction(action : ActionInterval) : void;	
	/** Get inner Action. 
	*/
	export function getInnerAction() : ActionInterval;	
	/** Creates the speed action which changes the speed of an action, making it take longer (speed > 1)
	or less (speed < 1) time. <br/>
	Useful to simulate 'slow motion' or 'fast forward' effect. 
	*/
	export function speed(action : ActionInterval, speed : number) : Action;	
	/** Create a follow action which makes its target follows another node.
	
	@example 
	```js
	// example
	// creates the action with a set boundary
	var followAction = cc.follow(targetNode, cc.rect(0, 0, screenWidth * 2 - 100, screenHeight));
	node.runAction(followAction);
	
	// creates the action with no boundary set
	var followAction = cc.follow(targetNode);
	node.runAction(followAction);
	``` 
	*/
	export function follow(followedNode : Node, rect : Rect) : Action;	
	/** creates an action with a Cardinal Spline array of points and tension.
	@param points array of control points
	
	@example 
	```js
	//create a cc.CardinalSplineTo
	var action1 = cc.cardinalSplineTo(3, array, 0);
	``` 
	*/
	export function cardinalSplineTo(duration : number, points : any[], tension : number) : ActionInterval;	
	/** creates an action with a Cardinal Spline array of points and tension. 
	*/
	export function cardinalSplineBy(duration : number, points : any[], tension : number) : ActionInterval;	
	/** creates an action with a Cardinal Spline array of points and tension.
	
	@example 
	```js
	var action1 = cc.catmullRomTo(3, array);
	``` 
	*/
	export function catmullRomTo(dt : number, points : any[]) : ActionInterval;	
	/** Creates an action with a Cardinal Spline array of points and tension
	
	@example 
	```js
	var action1 = cc.catmullRomBy(3, array);
	``` 
	*/
	export function catmullRomBy(dt : number, points : any[]) : ActionInterval;	
	/** Creates the action easing object with the rate parameter. <br />
	From slow to fast.
	
	@example 
	```js
	// example
	action.easing(cc.easeIn(3.0));
	``` 
	*/
	export function easeIn(rate : number) : any;	
	/** Creates the action easing object with the rate parameter. <br />
	From fast to slow.
	
	@example 
	```js
	// example
	action.easing(cc.easeOut(3.0));
	``` 
	*/
	export function easeOut(rate : number) : any;	
	/** Creates the action easing object with the rate parameter. <br />
	Slow to fast then to slow.
	
	@example 
	```js
	//The new usage
	action.easing(cc.easeInOut(3.0));
	``` 
	*/
	export function easeInOut(rate : number) : any;	
	/** Creates the action easing object with the rate parameter. <br />
	Reference easeInExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeExponentialIn());
	``` 
	*/
	export function easeExponentialIn() : any;	
	/** creates the action easing object. <br />
	Reference easeOutExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeExponentialOut());
	``` 
	*/
	export function easeExponentialOut() : any;	
	/** creates an EaseExponentialInOut action easing object. <br />
	Reference easeInOutExpo: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeExponentialInOut());
	``` 
	*/
	export function easeExponentialInOut() : any;	
	/** creates an EaseSineIn action. <br />
	Reference easeInSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeSineIn());
	``` 
	*/
	export function easeSineIn() : any;	
	/** Creates an EaseSineOut action easing object. <br />
	Reference easeOutSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeSineOut());
	``` 
	*/
	export function easeSineOut() : any;	
	/** creates the action easing object. <br />
	Reference easeInOutSine: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeSineInOut());
	``` 
	*/
	export function easeSineInOut() : any;	
	/** Creates the action easing obejct with the period in radians (default is 0.3). <br />
	Reference easeInElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeElasticIn(3.0));
	``` 
	*/
	export function easeElasticIn(period? : number) : any;	
	/** Creates the action easing object with the period in radians (default is 0.3). <br />
	Reference easeOutElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeElasticOut(3.0));
	``` 
	*/
	export function easeElasticOut(period? : number) : any;	
	/** Creates the action easing object with the period in radians (default is 0.3). <br />
	Reference easeInOutElastic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	// example
	action.easing(cc.easeElasticInOut(3.0));
	``` 
	*/
	export function easeElasticInOut(period? : number) : any;	
	/** Creates the action easing object. <br />
	Eased bounce effect at the beginning.
	
	@example 
	```js
	// example
	action.easing(cc.easeBounceIn());
	``` 
	*/
	export function easeBounceIn() : any;	
	/** Creates the action easing object. <br />
	Eased bounce effect at the ending.
	
	@example 
	```js
	// example
	action.easing(cc.easeBounceOut());
	``` 
	*/
	export function easeBounceOut() : any;	
	/** Creates the action easing object. <br />
	Eased bounce effect at the begining and ending.
	
	@example 
	```js
	// example
	action.easing(cc.easeBounceInOut());
	``` 
	*/
	export function easeBounceInOut() : any;	
	/** Creates the action easing object. <br />
	In the opposite direction to move slowly, and then accelerated to the right direction.
	
	@example 
	```js
	// example
	action.easing(cc.easeBackIn());
	``` 
	*/
	export function easeBackIn() : any;	
	/** Creates the action easing object. <br />
	Fast moving more than the finish, and then slowly back to the finish.
	
	@example 
	```js
	// example
	action.easing(cc.easeBackOut());
	``` 
	*/
	export function easeBackOut() : any;	
	/** Creates the action easing object. <br />
	Begining of cc.EaseBackIn. Ending of cc.EaseBackOut.
	
	@example 
	```js
	// example
	action.easing(cc.easeBackInOut());
	``` 
	*/
	export function easeBackInOut() : any;	
	/** Creates the action easing object. <br />
	Into the 4 reference point. <br />
	To calculate the motion curve.
	@param p0 The first bezier parameter
	@param p1 The second bezier parameter
	@param p2 The third bezier parameter
	@param p3 The fourth bezier parameter
	
	@example 
	```js
	// example
	action.easing(cc.easeBezierAction(0.5, 0.5, 1.0, 1.0));
	``` 
	*/
	export function easeBezierAction(p0 : number, p1 : number, p2 : number, p3 : number) : any;	
	/** Creates the action easing object. <br />
	Reference easeInQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuadraticActionIn());
	``` 
	*/
	export function easeQuadraticActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuadraticActionOut());
	``` 
	*/
	export function easeQuadraticActionOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInOutQuad: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuadraticActionInOut());
	``` 
	*/
	export function easeQuadraticActionInOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeIntQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuarticActionIn());
	``` 
	*/
	export function easeQuarticActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.QuarticActionOut());
	``` 
	*/
	export function easeQuarticActionOut() : any;	
	/** Creates the action easing object.  <br />
	Reference easeInOutQuart: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 
	*/
	export function easeQuarticActionInOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuinticActionIn());
	``` 
	*/
	export function easeQuinticActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuadraticActionOut());
	``` 
	*/
	export function easeQuinticActionOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInOutQuint: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeQuinticActionInOut());
	``` 
	*/
	export function easeQuinticActionInOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeCircleActionIn());
	``` 
	*/
	export function easeCircleActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 
	*/
	export function easeCircleActionOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInOutCirc: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeCircleActionInOut());
	``` 
	*/
	export function easeCircleActionInOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeCubicActionIn());
	``` 
	*/
	export function easeCubicActionIn() : any;	
	/** Creates the action easing object. <br />
	Reference easeOutCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418
	
	@example 
	```js
	//example
	action.easing(cc.easeCubicActionOut());
	``` 
	*/
	export function easeCubicActionOut() : any;	
	/** Creates the action easing object. <br />
	Reference easeInOutCubic: <br />
	http://www.zhihu.com/question/21981571/answer/19925418 
	*/
	export function easeCubicActionInOut() : any;	
	/** Show the Node.
	
	@example 
	```js
	// example
	var showAction = cc.show();
	``` 
	*/
	export function show() : ActionInstant;	
	/** Hide the node.
	
	@example 
	```js
	// example
	var hideAction = cc.hide();
	``` 
	*/
	export function hide() : ActionInstant;	
	/** Toggles the visibility of a node.
	
	@example 
	```js
	// example
	var toggleVisibilityAction = cc.toggleVisibility();
	``` 
	*/
	export function toggleVisibility() : ActionInstant;	
	/** Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
	
	@example 
	```js
	// example
	var removeSelfAction = cc.removeSelf();
	``` 
	*/
	export function removeSelf(isNeedCleanUp? : boolean) : ActionInstant;	
	/** Create a FlipX action to flip or unflip the target.
	@param flip Indicate whether the target should be flipped or not
	
	@example 
	```js
	var flipXAction = cc.flipX(true);
	``` 
	*/
	export function flipX(flip : boolean) : ActionInstant;	
	/** Create a FlipY action to flip or unflip the target.
	
	@example 
	```js
	var flipYAction = cc.flipY(true);
	``` 
	*/
	export function flipY(flip : boolean) : ActionInstant;	
	/** Creates a Place action with a position.
	
	@example 
	```js
	// example
	var placeAction = cc.place(cc.p(200, 200));
	var placeAction = cc.place(200, 200);
	``` 
	*/
	export function place(pos : Vec2|number, y? : number) : ActionInstant;	
	/** Creates the action with the callback
	@param data data for function, it accepts all data types.
	
	@example 
	```js
	// example
	// CallFunc without data
	var finish = cc.callFunc(this.removeSprite, this);
	
	// CallFunc with data
	var finish = cc.callFunc(this.removeFromParentAndCleanup, this._grossini,  true);
	``` 
	*/
	export function callFunc(selector : Function, selectorTarget? : any|void, data? : any|void) : ActionInstant;	
	/** Helper constructor to create an array of sequenceable actions
	The created action will run actions sequentially, one after another.
	
	@example 
	```js
	// example
	// create sequence with actions
	var seq = cc.sequence(act1, act2);
	
	// create sequence with array
	var seq = cc.sequence(actArray);
	todo: It should be use new
	``` 
	*/
	export function sequence(tempArray : any[]|FiniteTimeAction) : ActionInterval;	
	/** Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
	
	@example 
	```js
	// example
	var rep = cc.repeat(cc.sequence(jump2, jump1), 5);
	``` 
	*/
	export function repeat(action : FiniteTimeAction, times : number) : ActionInterval;	
	/** Create a acton which repeat forever
	
	@example 
	```js
	// example
	var repeat = cc.repeatForever(cc.rotateBy(1.0, 360));
	``` 
	*/
	export function repeatForever(action : FiniteTimeAction) : ActionInterval;	
	/** Create a spawn action which runs several actions in parallel.
	
	@example 
	```js
	// example
	var action = cc.spawn(cc.jumpBy(2, cc.p(300, 0), 50, 4), cc.rotateBy(2, 720));
	todo:It should be the direct use new
	``` 
	*/
	export function spawn(tempArray : any[]|FiniteTimeAction) : FiniteTimeAction;	
	/** Rotates a Node object to a certain angle by modifying its rotation property. <br/>
	The direction will be decided by the shortest angle.
	@param duration duration in seconds
	@param deltaAngleX deltaAngleX in degrees.
	@param deltaAngleY deltaAngleY in degrees.
	
	@example 
	```js
	// example
	var rotateTo = cc.rotateTo(2, 61.0);
	``` 
	*/
	export function rotateTo(duration : number, deltaAngleX : number, deltaAngleY? : number) : ActionInterval;	
	/** Rotates a Node object clockwise a number of degrees by modifying its rotation property.
	Relative to its properties to modify.
	@param duration duration in seconds
	@param deltaAngleX deltaAngleX in degrees
	@param deltaAngleY deltaAngleY in degrees
	
	@example 
	```js
	// example
	var actionBy = cc.rotateBy(2, 360);
	``` 
	*/
	export function rotateBy(duration : number, deltaAngleX : number, deltaAngleY? : number) : ActionInterval;	
	/** Moves a Node object x,y pixels by modifying its position property.                                  <br/>
	x and y are relative to the position of the object.                                                     <br/>
	Several MoveBy actions can be concurrently called, and the resulting                                  <br/>
	movement will be the sum of individual movements.
	@param duration duration in seconds
	
	@example 
	```js
	// example
	var actionTo = cc.moveBy(2, cc.p(windowSize.width - 40, windowSize.height - 40));
	``` 
	*/
	export function moveBy(duration : number, deltaPos : Vec2|number, deltaY : number) : ActionInterval;	
	/** Moves a Node object to the position x,y. x and y are absolute coordinates by modifying its position property. <br/>
	Several MoveTo actions can be concurrently called, and the resulting                                            <br/>
	movement will be the sum of individual movements.
	@param duration duration in seconds
	
	@example 
	```js
	// example
	var actionBy = cc.moveTo(2, cc.p(80, 80));
	``` 
	*/
	export function moveTo(duration : number, position : Vec2, y : number) : ActionInterval;	
	/** Create a action which skews a Node object to given angles by modifying its skewX and skewY properties.
	Changes to the specified value.
	@param t time in seconds
	
	@example 
	```js
	// example
	var actionTo = cc.skewTo(2, 37.2, -37.2);
	``` 
	*/
	export function skewTo(t : number, sx : number, sy : number) : ActionInterval;	
	/** Skews a Node object by skewX and skewY degrees. <br />
	Relative to its property modification.
	@param t time in seconds
	@param sx sx skew in degrees for X axis
	@param sy sy skew in degrees for Y axis
	
	@example 
	```js
	// example
	var actionBy = cc.skewBy(2, 0, -90);
	``` 
	*/
	export function skewBy(t : number, sx : number, sy : number) : ActionInterval;	
	/** Moves a Node object simulating a parabolic jump movement by modifying it's position property.
	Relative to its movement.
	
	@example 
	```js
	// example
	var actionBy = cc.jumpBy(2, cc.p(300, 0), 50, 4);
	var actionBy = cc.jumpBy(2, 300, 0, 50, 4);
	``` 
	*/
	export function jumpBy(duration : number, position : Vec2|number, y? : number, height : number, jumps : number) : ActionInterval;	
	/** Moves a Node object to a parabolic position simulating a jump movement by modifying its position property. <br />
	Jump to the specified location.
	
	@example 
	```js
	// example
	var actionTo = cc.jumpTo(2, cc.p(300, 300), 50, 4);
	var actionTo = cc.jumpTo(2, 300, 300, 50, 4);
	``` 
	*/
	export function jumpTo(duration : number, position : Vec2|number, y? : number, height : number, jumps : number) : ActionInterval;	
	/** An action that moves the target with a cubic Bezier curve by a certain distance.
	Relative to its movement.
	@param t time in seconds
	@param c Array of points
	
	@example 
	```js
	// example
	var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
	var bezierForward = cc.bezierBy(3, bezier);
	``` 
	*/
	export function bezierBy(t : number, c : any[]) : ActionInterval;	
	/** An action that moves the target with a cubic Bezier curve to a destination point.
	@param c array of points
	
	@example 
	```js
	// example
	var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
	var bezierTo = cc.bezierTo(2, bezier);
	``` 
	*/
	export function bezierTo(t : number, c : any[]) : ActionInterval;	
	/** Scales a Node object to a zoom factor by modifying it's scale property.
	@param sx scale parameter in X
	@param sy scale parameter in Y, if Null equal to sx
	
	@example 
	```js
	// example
	// It scales to 0.5 in both X and Y.
	var actionTo = cc.scaleTo(2, 0.5);
	
	// It scales to 0.5 in x and 2 in Y
	var actionTo = cc.scaleTo(2, 0.5, 2);
	``` 
	*/
	export function scaleTo(duration : number, sx : number, sy? : number) : ActionInterval;	
	/** Scales a Node object a zoom factor by modifying it's scale property.
	Relative to its changes.
	@param duration duration in seconds
	@param sx sx  scale parameter in X
	@param sy sy scale parameter in Y, if Null equal to sx
	
	@example 
	```js
	// example without sy, it scales by 2 both in X and Y
	var actionBy = cc.scaleBy(2, 2);
	
	//example with sy, it scales by 0.25 in X and 4.5 in Y
	var actionBy2 = cc.scaleBy(2, 0.25, 4.5);
	``` 
	*/
	export function scaleBy(duration : number, sx : number, sy? : number|void) : ActionInterval;	
	/** Blinks a Node object by modifying it's visible property.
	@param duration duration in seconds
	@param blinks blinks in times
	
	@example 
	```js
	// example
	var action = cc.blink(2, 10);
	``` 
	*/
	export function blink(duration : number, blinks : number) : ActionInterval;	
	/** Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
	@param opacity 0-255, 0 is transparent
	
	@example 
	```js
	// example
	var action = cc.fadeTo(1.0, 0);
	``` 
	*/
	export function fadeTo(duration : number, opacity : number) : ActionInterval;	
	/** Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.
	@param duration duration in seconds
	
	@example 
	```js
	//example
	var action = cc.fadeIn(1.0);
	``` 
	*/
	export function fadeIn(duration : number) : ActionInterval;	
	/** Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
	@param d duration in seconds
	
	@example 
	```js
	// example
	var action = cc.fadeOut(1.0);
	``` 
	*/
	export function fadeOut(d : number) : ActionInterval;	
	/** Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
	@param red 0-255
	@param green 0-255
	@param blue 0-255
	
	@example 
	```js
	// example
	var action = cc.tintTo(2, 255, 0, 255);
	``` 
	*/
	export function tintTo(duration : number, red : number, green : number, blue : number) : ActionInterval;	
	/** Tints a Node that implements the cc.NodeRGB protocol from current tint to a custom one.
	Relative to their own color change.
	@param duration duration in seconds
	
	@example 
	```js
	// example
	var action = cc.tintBy(2, -127, -255, -127);
	``` 
	*/
	export function tintBy(duration : number, deltaRed : number, deltaGreen : number, deltaBlue : number) : ActionInterval;	
	/** Delays the action a certain amount of seconds
	@param d duration in seconds
	
	@example 
	```js
	// example
	var delay = cc.delayTime(1);
	``` 
	*/
	export function delayTime(d : number) : ActionInterval;	
	/** Executes an action in reverse order, from time=duration to time=0.
	
	@example 
	```js
	// example
	 var reverse = cc.reverseTime(this);
	``` 
	*/
	export function reverseTime(action : FiniteTimeAction) : ActionInterval;	
	/** Constructor 
	*/
	export function HashElement() : void;	
	/** cc.view is the shared view object. */
	export var view : View;	
	export var director : Director;	
	/** cc.winSize is the alias object for the size of the current game window. */
	export var winSize : Size;	
	export var game : Game;	
	/** whether enable accelerometer event 
	*/
	export function setAccelerometerEnabled(isEnable : boolean) : void;	
	/** set accelerometer interval value 
	*/
	export function setAccelerometerInterval(interval : number) : void;	
	/** Checks whether subclass is child of superclass or equals to superclass 
	*/
	export function isChildClassOf(subclass : Function, superclass : Function) : boolean;	
	/** !#en Defines a CCClass using the given specification, please see [Class](/en/scripting/class/) for details.
	!#zh 定义一个 CCClass，传入参数必须是一个包含类型参数的字面量对象，具体用法请查阅[类型定义](/zh/scripting/class/)。
	
	@example 
	```js
	// define base class
	var Node = cc.Class();
	
	// define sub class
	var Sprite = cc.Class({
	name: 'Sprite',
	extends: Node,
	ctor: function () {
	this.url = "";
	this.id = 0;
	},
	
	properties {
	width: {
	default: 128,
	type: 'Integer',
	tooltip: 'The width of sprite'
	},
	height: 128,
	size: {
	get: function () {
	return cc.v2(this.width, this.height);
	}
	}
	},
	
	load: function () {
	// load this.url
	};
	});
	
	// instantiate
	
	var obj = new Sprite();
	obj.url = 'sprite.png';
	obj.load();
	
	// define static member
	
	Sprite.count = 0;
	Sprite.getBounds = function (spriteList) {
	// ...
	};
	``` 
	*/
	export function Class(options : { name? : string; extends? : Function; ctor? : Function; properties? : any; statics? : any; mixins? : Function[]; editor? : any; update? : Function; lateUpdate? : Function; onLoad? : Function; start? : Function; onEnable? : Function; onDisable? : Function; onDestroy? : Function; onFocusInEditor? : Function; onLostFocusInEditor? : Function; onRestore? : Function; _getLocalBounds? : Function; }) : Function;	
	/** Checks whether the object is non-nil and not yet destroyed 
	*/
	export function isValid(value : any) : boolean;	
	/** Specify that the input value must be integer in Inspector.
	Also used to indicates that the elements in array should be type integer. */
	export var Integer : string;	
	/** Indicates that the elements in array should be type double. */
	export var Float : string;	
	/** Indicates that the elements in array should be type boolean. */
	export var Boolean : string;	
	/** Indicates that the elements in array should be type string. */
	export var String : string;	
	/** !#en Deserialize json to cc.Asset
	!#zh 将 JSON 反序列化为对象实例。
	
	当指定了 target 选项时，如果 target 引用的其它 asset 的 uuid 不变，则不会改变 target 对 asset 的引用，
	也不会将 uuid 保存到 result 对象中。
	@param data the serialized cc.Asset json string or json object.
	@param result additional loading result 
	*/
	export function deserialize(data : string|any, result? : Details, options? : any) : any;	
	/** !#en Clones the object original and returns the clone.
	
	See [Clone exists Entity](/en/scripting/create-destroy-entities/#instantiate)
	
	!#zh 复制给定的对象
	
	详细用法可参考[复制已有Entity](/zh/scripting/create-destroy-entities/#instantiate)
	
	Instantiate 时，function 和 dom 等非可序列化对象会直接保留原有引用，Asset 会直接进行浅拷贝，可序列化类型会进行深拷贝。
	<del>对于 Entity / Component 等 Scene Object，如果对方也会被一起 Instantiate，则重定向到新的引用，否则保留为原来的引用。</del>
	@param original An existing object that you want to make a copy of. 
	*/
	export function instantiate(original : any) : any;	
	/** Finds a node by hierarchy path, the path is case-sensitive.
	It will traverse the hierarchy by splitting the path using '/' character.
	This function will still returns the node even if it is inactive.
	It is recommended to not use this function every frame instead cache the result at startup. 
	*/
	export function find(path : string, referenceNode? : Node) : Node;	
	/** Define an enum type. If a enum item has a value of -1, it will be given an Integer number according to it's order in the list. Otherwise it will use the value specified by user who writes the enum definition.
	@param obj a JavaScript literal object containing enum names and values
	
	@example 
	```js
	Texture.WrapMode = cc.Enum({
	Repeat: -1,
	Clamp: -1
	});
	// Texture.WrapMode.Repeat == 0
	// Texture.WrapMode.Clamp == 1
	// Texture.WrapMode[0] == "Repeat"
	// Texture.WrapMode[1] == "Clamp"
	
	var FlagType = cc.Enum({
	Flag1: 1,
	Flag2: 2,
	Flag3: 4,
	Flag4: 8,
	});
	var AtlasSizeList = cc.Enum({
	128: 128,
	256: 256,
	512: 512,
	1024: 1024,
	});
	``` 
	*/
	export function Enum(obj : any) : any;	
	/** Returns opposite of point. 
	*/
	export function pNeg(point : Vec2) : Vec2;	
	/** Calculates sum of two points. 
	*/
	export function pAdd(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Calculates difference of two points. 
	*/
	export function pSub(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Returns point multiplied by given factor. 
	*/
	export function pMult(point : Vec2, floatVar : number) : Vec2;	
	/** Calculates midpoint between two points. 
	*/
	export function pMidpoint(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Calculates dot product of two points. 
	*/
	export function pDot(v1 : Vec2, v2 : Vec2) : number;	
	/** Calculates cross product of two points. 
	*/
	export function pCross(v1 : Vec2, v2 : Vec2) : number;	
	/** Calculates perpendicular of v, rotated 90 degrees counter-clockwise -- cross(v, perp(v)) greater than 0 
	*/
	export function pPerp(point : Vec2) : Vec2;	
	/** Calculates perpendicular of v, rotated 90 degrees clockwise -- cross(v, rperp(v)) smaller than 0 
	*/
	export function pRPerp(point : Vec2) : Vec2;	
	/** Calculates the projection of v1 over v2. 
	*/
	export function pProject(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Rotates two points. 
	*/
	export function pRotate(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Unrotates two points. 
	*/
	export function pUnrotate(v1 : Vec2, v2 : Vec2) : Vec2;	
	/** Calculates the square length of a cc.Vec2 (not calling sqrt() ) 
	*/
	export function pLengthSQ(v : Vec2) : number;	
	/** Calculates the square distance between two points (not calling sqrt() ) 
	*/
	export function pDistanceSQ(point1 : Vec2, point2 : Vec2) : number;	
	/** Calculates distance between point an origin 
	*/
	export function pLength(v : Vec2) : number;	
	/** Calculates the distance between two points 
	*/
	export function pDistance(v1 : Vec2, v2 : Vec2) : number;	
	/** Returns point multiplied to a length of 1. 
	*/
	export function pNormalize(v : Vec2) : Vec2;	
	/** Converts radians to a normalized vector. 
	*/
	export function pForAngle(a : number) : Vec2;	
	/** Converts a vector to radians. 
	*/
	export function pToAngle(v : Vec2) : number;	
	/** Clamp a value between from and to. 
	*/
	export function clampf(value : number, min_inclusive : number, max_inclusive : number) : number;	
	/** Clamp a value between 0 and 1. 
	*/
	export function clamp01(value : number) : number;	
	/** Clamp a point between from and to. 
	*/
	export function pClamp(p : Vec2, min_inclusive : number, max_inclusive : number) : Vec2;	
	/** Quickly convert cc.Size to a cc.Vec2. 
	*/
	export function pFromSize(s : Size) : Vec2;	
	/** Run a math operation function on each point component <br />
	Math.abs, Math.fllor, Math.ceil, Math.round.
	
	@example 
	```js
	--------------
	//For example: let's try to take the floor of x,y
	var p = cc.pCompOp(cc.p(10,10),Math.abs);
	
	``` 
	*/
	export function pCompOp(p : Vec2, opFunc : Function) : Vec2;	
	/** Linear Interpolation between two points a and b.
	alpha == 0 ? a
	alpha == 1 ? b
	otherwise a value between a..b 
	*/
	export function pLerp(a : Vec2, b : Vec2, alpha : number) : Vec2;	
	/**  
	*/
	export function pFuzzyEqual(a : Vec2, b : Vec2, variance : number) : boolean;	
	/** Multiplies a nd b components, a.x*b.x, a.y*b.y. 
	*/
	export function pCompMult(a : Vec2, b : Vec2) : Vec2;	
	/**  
	*/
	export function pAngleSigned(a : Vec2, b : Vec2) : number;	
	/**  
	*/
	export function pAngle(a : Vec2, b : Vec2) : number;	
	/** Rotates a point counter clockwise by the angle around a pivot.
	@param v v is the point to rotate
	@param pivot pivot is the pivot, naturally
	@param angle angle is the angle of rotation cw in radians 
	*/
	export function pRotateByAngle(v : Vec2, pivot : Vec2, angle : number) : Vec2;	
	/** A general line-line intersection test
	indicating successful intersection of a line<br />
	note that to truly test intersection for segments we have to make<br />
	sure that s & t lie within [0..1] and for rays, make sure s & t > 0<br />
	the hit point is        p3 + t * (p4 - p3);<br />
	the hit point also is    p1 + s * (p2 - p1);
	@param A A is the startpoint for the first line P1 = (p1 - p2).
	@param B B is the endpoint for the first line P1 = (p1 - p2).
	@param C C is the startpoint for the second line P2 = (p3 - p4).
	@param D D is the endpoint for the second line P2 = (p3 - p4).
	@param retP retP.x is the range for a hitpoint in P1 (pa = p1 + s*(p2 - p1)), <br />
	retP.y is the range for a hitpoint in P3 (pa = p2 + t*(p4 - p3)). 
	*/
	export function pLineIntersect(A : Vec2, B : Vec2, C : Vec2, D : Vec2, retP : Vec2) : boolean;	
	/** ccpSegmentIntersect return YES if Segment A-B intersects with segment C-D. 
	*/
	export function pSegmentIntersect(A : Vec2, B : Vec2, C : Vec2, D : Vec2) : boolean;	
	/** ccpIntersectPoint return the intersection point of line A-B, C-D. 
	*/
	export function pIntersectPoint(A : Vec2, B : Vec2, C : Vec2, D : Vec2) : Vec2;	
	/** check to see if both points are equal.
	@param A A ccp a
	@param B B ccp b to be compared 
	*/
	export function pSameAs(A : Vec2, B : Vec2) : boolean;	
	/** sets the position of the point to 0. 
	*/
	export function pZeroIn(v : Vec2) : void;	
	/** copies the position of one point to another. 
	*/
	export function pIn(v1 : Vec2, v2 : Vec2) : void;	
	/** multiplies the point with the given factor (inplace). 
	*/
	export function pMultIn(point : Vec2, floatVar : number) : void;	
	/** subtracts one point from another (inplace). 
	*/
	export function pSubIn(v1 : Vec2, v2 : Vec2) : void;	
	/** adds one point to another (inplace). 
	*/
	export function pAddIn(v1 : Vec2, v2 : Vec2) : void;	
	/** normalizes the point (inplace). 
	*/
	export function pNormalizeIn(v : Vec2) : void;	
	export function V3F_C4B_T2F_QuadZero() : V3F_C4B_T2F_Quad;	
	/**  
	*/
	export function V3F_C4B_T2F_QuadCopy(sourceQuad: (tl: V3F_C4B_T2F, bl: V3F_C4B_T2F, tr: V3F_C4B_T2F, br: V3F_C4B_T2F, arrayBuffer: any[], offset: number) => void) : V3F_C4B_T2F_Quad;	
	/**  
	*/
	export function V3F_C4B_T2F_QuadsCopy(sourceQuads : any[]) : any[];	
	/** The convenience method to create a new {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}}. 
	*/
	export function v2(x? : number|any, y? : number) : Vec2;	
	/** The convenience method to creates a new {{#crossLink "Vec2"}}cc.Vec2{{/crossLink}}.
	@param x a Number or a size object
	
	@example 
	```js
	var point1 = cc.p();
	var point2 = cc.p(100, 100);
	var point3 = cc.p(point2);
	var point4 = cc.p({x: 100, y: 100});
	``` 
	*/
	export function p(x? : number|any, y? : number) : Vec2;	
	/** Check whether a point's value equals to another
	@param point1 Constructor
	@param point2 Constructor 
	*/
	export function pointEqualToPoint(point1: (x: number, y: number) => void, point2: (x: number, y: number) => void) : boolean;	
	/** Enum for debug modes. */
	export enum DebugMode {		
		NONE = 0,
		INFO = 0,
		WARN = 0,
		ERROR = 0,
		INFO_FOR_WEB_PAGE = 0,
		WARN_FOR_WEB_PAGE = 0,
		ERROR_FOR_WEB_PAGE = 0,	
	}		
		/** Base class cc.Action for action classes. */
		export class Action {		
		/** to copy object with deep copy.
		returns a clone of action. 
		*/
		clone() : Action;		
		/** return true if the action has finished. 
		*/
		isDone() : boolean;		
		/** get the target. 
		*/
		getTarget() : Node;		
		/** The action will modify the target properties. 
		*/
		setTarget(target : Node) : void;		
		/** get the original target. 
		*/
		getOriginalTarget() : Node;		
		/** get tag number. 
		*/
		getTag() : number;		
		/** set tag number. 
		*/
		setTag(tag : number) : void;	
	}		
		/** Base class actions that do have a finite time duration. <br/>
		Possible actions: <br/>
		- An action with a duration of 0 seconds. <br/>
		- An action with a duration of 35.5 seconds.
		
		Infinite time actions are valid */
		export class FiniteTimeAction extends Action {		
		/** get duration of the action. (seconds) 
		*/
		getDuration() : number;		
		/** set duration of the action. (seconds) 
		*/
		setDuration(duration : number) : void;		
		/** Returns a reversed action. <br />
		For example: <br />
		- The action will be x coordinates of 0 move to 100. <br />
		- The reversed action will be x of 100 move to 0.
		- Will be rewritten 
		*/
		reverse() : void;		
		/** to copy object with deep copy.
		returns a clone of action. 
		*/
		clone() : FiniteTimeAction;	
	}		
		/** Base class for Easing actions */
		export class ActionEase extends ActionInterval {	
	}		
		/** Base class for Easing actions with rate parameters */
		export class EaseRateAction extends ActionEase {	
	}		
		/** Ease Elastic abstract class. */
		export class EaseElastic extends ActionEase {	
	}		
		/** cc.EaseBounce abstract class. */
		export class EaseBounce extends ActionEase {	
	}		
		/** Instant actions are immediate actions. They don't have a duration like the ActionInterval actions. */
		export class ActionInstant extends FiniteTimeAction {	
	}		
		/** <p> An interval action is an action that takes place within a certain period of time. <br/>
		It has an start time, and a finish time. The finish time is the parameter<br/>
		duration plus the start time.</p>
		
		<p>These CCActionInterval actions have some interesting properties, like:<br/>
		- They can run normally (default)  <br/>
		- They can run reversed with the reverse method   <br/>
		- They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
		
		<p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
		then running it again in Reverse mode. </p> */
		export class ActionInterval extends FiniteTimeAction {		
		/** Repeats an action a number of times.
		To repeat an action forever use the CCRepeatForever action. 
		*/
		repeat(times : void) : ActionInterval;		
		/** Repeats an action for ever.  <br/>
		To repeat the an action for a limited number of times use the Repeat action. <br/> 
		*/
		repeatForever() : ActionInterval;	
	}		
		/** This API is deprecated, will be replaced by new API from {{#crossLink "Animation"}}cc.Animation{{/crossLink}}
		Animates a sprite given the name of an Animation */
		export class Animate extends ActionInterval {		
		/** create the animate with animation
		
		@example 
		```js
		// example
		// create the animation with animation
		var anim = cc.animate(dance_grey);
		``` 
		*/
		animate(animation : SpriteFrameAnimation) : ActionInterval;		
		/** Create an action with the specified action and forced target 
		*/
		targetedAction(target : Node, action : FiniteTimeAction) : ActionInterval;	
	}		
		/** Class for animation data handling. */
		export class AnimationClip extends Asset {		
		constructor();		
		/** Duration of this animation */
		duration : number;		
		/** FrameRate of this animation */
		sample : number;		
		/** Speed of this animation */
		speed : number;		
		/** WrapMode of this animation */
		wrapMode : WrapMode;		
		/** Curve data */
		curveData : any;		
		/** Event data */
		events : any[];	
	}		
		/** The AnimationState gives full control over animation playback process.
		In most cases the Animation Component is sufficient and easier to use. Use the AnimationState if you need full control. */
		export class AnimationState extends AnimationNode {		
		constructor();		
		/**  
		*/
		AnimationState(clip : AnimationClip, name? : string) : AnimationState;		
		/** The clip that is being played by this animation state. */
		clip : AnimationClip;		
		/** The name of the playing animation. */
		name : string;	
	}		
		/** undefined */
		export class Playable {		
		constructor();		
		/** Is playing or paused in play mode? */
		isPlaying : boolean;		
		/** Is currently paused? This can be true even if in edit mode(isPlaying == false). */
		isPaused : boolean;		
		/** Play this animation 
		*/
		play() : void;		
		/** Stop this animation 
		*/
		stop() : void;		
		/** Pause this animation 
		*/
		pause() : void;		
		/** Resume this animation 
		*/
		resume() : void;		
		/** Perform a single frame step. 
		*/
		step() : void;	
	}	
	/** Specifies how time is treated when it is outside of the keyframe range of an Animation. */
	export enum WrapMode {		
		Default = 0,
		Normal = 0,
		Reverse = 0,
		Loop = 0,
		LoopReverse = 0,
		PingPong = 0,
		PingPongReverse = 0,	
	}		
		/** The abstract interface for all playing animation. */
		export class AnimationNodeBase extends Playable {		
		constructor();	
	}		
		/** The collection and instance of playing animations created by entity.animate. */
		export class AnimationNode extends AnimationNodeBase {		
		/** 
		@param timingInput This dictionary is used as a convenience for specifying the timing properties of an Animation in bulk. 
		*/
		constructor(animator : Animator, curves? : AnimCurve[], timingInput? : any);		
		curves : AnimCurve[];		
		/** !#en The start delay which represents the number of seconds from an animation's start time to the start of
		the active interval.
		!#zh 延迟多少秒播放 */
		delay : number;		
		/** !#en The animation's iteration count property.
		
		A real number greater than or equal to zero (including positive infinity) representing the number of times
		to repeat the animation node.
		
		Values less than zero and NaN values are treated as the value 1.0 for the purpose of timing model
		calculations.
		
		!#zh 迭代次数, 指动画播放多少次后结束, normalize time. 如 2.5 ( 2次半 ) */
		repeatCount : number;		
		/** !#en The iteration duration of this animation in seconds. (length)
		!#zh 单次动画的持续时间, 秒 */
		duration : number;		
		/** !#en The animation's playback speed. 1 is normal playback speed.
		!#zh 播放速率 */
		speed : number;		
		/** !#en Wrapping mode of the playing animation.
		!#zh 动画循环方式 */
		wrapMode : WrapMode;		
		/** The current time of this animation in seconds. */
		time : number;	
	}		
		/** cc.audioEngine is the singleton object, it provide simple audio APIs. */
		export class audioEngine {		
		/** Indicates whether any background music can be played or not. 
		*/
		willPlayMusic() : boolean;		
		/** Play music.
		@param url The path of the music file without filename extension.
		@param loop Whether the music loop or not.
		
		@example 
		```js
		//example
		cc.audioEngine.playMusic(path, false);
		``` 
		*/
		playMusic(url : string, loop : boolean) : void;		
		/** Stop playing music.
		@param releaseData If release the music data or not.As default value is false.
		
		@example 
		```js
		//example
		cc.audioEngine.stopMusic();
		``` 
		*/
		stopMusic(releaseData? : boolean) : void;		
		/** Pause playing music.
		
		@example 
		```js
		//example
		cc.audioEngine.pauseMusic();
		``` 
		*/
		pauseMusic() : void;		
		/** Resume playing music.
		
		@example 
		```js
		//example
		cc.audioEngine.resumeMusic();
		``` 
		*/
		resumeMusic() : void;		
		/** Rewind playing music.
		
		@example 
		```js
		//example
		cc.audioEngine.rewindMusic();
		``` 
		*/
		rewindMusic() : void;		
		/** The volume of the music max value is 1.0,the min value is 0.0 .
		
		@example 
		```js
		//example
		var volume = cc.audioEngine.getMusicVolume();
		``` 
		*/
		getMusicVolume() : number;		
		/** Set the volume of music.
		@param volume Volume must be in 0.0~1.0 .
		
		@example 
		```js
		//example
		cc.audioEngine.setMusicVolume(0.5);
		``` 
		*/
		setMusicVolume(volume : number) : void;		
		/** Whether the music is playing.
		
		@example 
		```js
		//example
		 if (cc.audioEngine.isMusicPlaying()) {
		     cc.log("music is playing");
		 }
		 else {
		     cc.log("music is not playing");
		 }
		``` 
		*/
		isMusicPlaying() : boolean;		
		/** Play sound effect.
		@param url The path of the sound effect with filename extension.
		@param loop Whether to loop the effect playing, default value is false
		
		@example 
		```js
		//example
		var soundId = cc.audioEngine.playEffect(path);
		``` 
		*/
		playEffect(url : string, loop : boolean) : number;		
		/** Set the volume of sound effects.
		@param volume Volume must be in 0.0~1.0 .
		
		@example 
		```js
		//example
		cc.audioEngine.setEffectsVolume(0.5);
		``` 
		*/
		setEffectsVolume(volume : number) : void;		
		/** The volume of the effects max value is 1.0,the min value is 0.0 .
		
		@example 
		```js
		//example
		var effectVolume = cc.audioEngine.getEffectsVolume();
		``` 
		*/
		getEffectsVolume() : number;		
		/** Pause playing sound effect.
		@param cc.Audio The return value of function playEffect.
		
		@example 
		```js
		//example
		cc.audioEngine.pauseEffect(audioID);
		``` 
		*/
		pauseEffect(cc.Audio : number) : void;		
		/** Pause all playing sound effect.
		
		@example 
		```js
		//example
		cc.audioEngine.pauseAllEffects();
		``` 
		*/
		pauseAllEffects() : void;		
		/** Resume playing sound effect.
		@param cc.Audio The return value of function playEffect. 
		*/
		resumeEffect(cc.Audio : number) : void;		
		/** Resume all playing sound effect
		
		@example 
		```js
		//example
		cc.audioEngine.resumeAllEffects();
		``` 
		*/
		resumeAllEffects() : void;		
		/** Stop playing sound effect.
		@param cc.Audio The return value of function playEffect.
		
		@example 
		```js
		//example
		cc.audioEngine.stopEffect(audioID);
		``` 
		*/
		stopEffect(cc.Audio : number) : void;		
		/** Stop all playing sound effects.
		
		@example 
		```js
		//example
		cc.audioEngine.stopAllEffects();
		``` 
		*/
		stopAllEffects() : void;		
		/** Unload the preloaded effect from internal buffer
		
		@example 
		```js
		//example
		cc.audioEngine.unloadEffect(EFFECT_FILE);
		``` 
		*/
		unloadEffect(url : string) : void;		
		/** End music and effects. 
		*/
		end() : void;	
	}		
		/** cc.ActionManager is a class that can manage actions.<br/>
		Normally you won't need to use this class directly. 99% of the cases you will use the CCNode interface,
		which uses this class's singleton object.
		But there are some cases where you might need to use this class. <br/>
		Examples:<br/>
		- When you want to run an action where the target is different from a CCNode.<br/>
		- When you want to pause / resume the actions<br/> */
		export class ActionManager {		
		/** If the target is already present, then the action will be added to the existing target.
		If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
		When the target is paused, the queued actions won't be 'ticked'. 
		*/
		addAction(action : Action, target : Node, paused : boolean) : void;		
		/** Removes all actions from all the targets. 
		*/
		removeAllActions() : void;		
		/** All the actions that belongs to the target will be removed. 
		*/
		removeAllActionsFromTarget(target : any, forceDelete : boolean) : void;		
		/**  
		*/
		removeAction(action : Action) : void;		
		/**  
		*/
		removeActionByTag(tag : number, target : any) : void;		
		/**  
		*/
		getActionByTag(tag : number, target : any) : Action;		
		/** Composable actions are counted as 1 action. <br/>
		Example: <br/>
		- If you are running 1 Sequence of 7 actions, it will return 1. <br/>
		- If you are running 7 Sequences of 2 actions, it will return 7. 
		*/
		numberOfRunningActionsInTarget(target : any) : number;		
		/**  
		*/
		pauseTarget(target : any) : void;		
		/**  
		*/
		resumeTarget(target : any) : void;		
		/** Pauses all running actions, returning a list of targets whose actions were paused. 
		*/
		pauseAllRunningActions() : any[];		
		/** Resume a set of targets (convenience function to reverse a pauseAllRunningActions or pauseTargets call) 
		*/
		resumeTargets(targetsToResume : any[]) : void;		
		/** Pause a set of targets 
		*/
		pauseTargets(targetsToPause : any[]) : void;		
		/** because it uses this, so it can not be static 
		*/
		purgeSharedManager() : void;		
		/** 
		@param dt delta time in seconds 
		*/
		update(dt : number) : void;	
	}		
		/** <p>
		   ATTENTION: USE cc.director INSTEAD OF cc.Director.<br/>
		   cc.director is a singleton object which manage your game's logic flow.<br/>
		   Since the cc.director is a singleton, you don't need to call any constructor or create functions,<br/>
		   the standard way to use it is by calling:<br/>
		     - cc.director.methodName(); <br/>
		
		   It creates and handle the main Window and manages how and when to execute the Scenes.<br/>
		   <br/>
		   The cc.director is also responsible for:<br/>
		     - initializing the OpenGL context<br/>
		     - setting the OpenGL pixel format (default on is RGB565)<br/>
		     - setting the OpenGL pixel format (default on is RGB565)<br/>
		     - setting the OpenGL buffer depth (default one is 0-bit)<br/>
		- setting the color for clear screen (default one is BLACK)<br/>
		     - setting the projection (default one is 3D)<br/>
		     - setting the orientation (default one is Portrait)<br/>
		     <br/>
		   <br/>
		   The cc.director also sets the default OpenGL context:<br/>
		     - GL_TEXTURE_2D is enabled<br/>
		     - GL_VERTEX_ARRAY is enabled<br/>
		     - GL_COLOR_ARRAY is enabled<br/>
		     - GL_TEXTURE_COORD_ARRAY is enabled<br/>
		</p>
		<p>
		  cc.director also synchronizes timers with the refresh rate of the display.<br/>
		  Features and Limitations:<br/>
		     - Scheduled timers & drawing are synchronizes with the refresh rate of the display<br/>
		     - Only supports animation intervals of 1/60 1/30 & 1/15<br/>
		</p> */
		export class Director {		
		/** Converts a view coordinate to an WebGL coordinate<br/>
		Useful to convert (multi) touches coordinates to the current layout (portrait or landscape)<br/>
		Implementation can be found in CCDirectorWebGL. 
		*/
		convertToGL(uiPoint : Vec2) : Vec2;		
		/** Converts an WebGL coordinate to a view coordinate<br/>
		Useful to convert node points to window points for calls such as glScissor<br/>
		Implementation can be found in CCDirectorWebGL. 
		*/
		convertToUI(glPoint : Vec2) : Vec2;		
		/** Returns the size in pixels of the surface. It could be different than the screen size.<br/>
		High-res devices might have a higher surface size than the screen size. 
		*/
		getContentScaleFactor() : number;		
		/** This object will be visited after the main scene is visited.<br/>
		This object MUST implement the "visit" selector.<br/>
		Useful to hook a notification object. 
		*/
		getNotificationNode() : Node;		
		/** Returns the size of the WebGL view in points.<br/>
		It takes into account any possible rotation (device orientation) of the window. 
		*/
		getWinSize() : Size;		
		/** Returns the size of the OpenGL view in pixels.<br/>
		It takes into account any possible rotation (device orientation) of the window.<br/>
		On Mac winSize and winSizeInPixels return the same value. 
		*/
		getWinSizeInPixels() : Size;		
		/** Returns the visible size of the running scene. 
		*/
		getVisibleSize() : Size;		
		/** Returns the visible origin of the running scene. 
		*/
		getVisibleOrigin() : Vec2;		
		/** Returns the z eye, only available in WebGL mode. 
		*/
		getZEye() : number;		
		/** Pause the director's ticker 
		*/
		pause() : void;		
		/** Suspends the execution of the running scene, pushing it on the stack of suspended scenes.<br/>
		The new scene will be executed.<br/>
		Try to avoid big stacks of pushed scenes to reduce memory allocation.<br/>
		ONLY call it if there is a running scene. 
		*/
		pushScene(scene : Scene) : void;		
		/** Run a scene. Replaces the running scene with a new one or enter the first scene.
		The new scene will be launched immediately.
		@param scene The need run scene.
		@param onBeforeLoadScene The function invoked at the scene before loading.
		@param onLaunched The function invoked at the scene after launch. 
		*/
		runScene(scene : Scene, onBeforeLoadScene? : Function, onLaunched? : Function) : void;		
		/** Run a scene. Replaces the running scene with a new one or enter the first scene.
		The new scene will be launched at the end of the current frame.
		@param scene The need run scene.
		@param onBeforeLoadScene The function invoked at the scene before loading.
		@param onLaunched The function invoked at the scene after launch. 
		*/
		runScene(scene : Scene, onBeforeLoadScene? : Function, onLaunched? : Function) : void;		
		/** Loads the scene by its name.
		@param sceneName The name of the scene to load.
		@param onLaunched callback, will be called after scene launched. 
		*/
		loadScene(sceneName : string, onLaunched? : Function) : boolean;		
		/** Resume director after pause, if the current scene is not paused, nothing will happen. 
		*/
		resume() : void;		
		/** Enables or disables WebGL depth test.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js 
		*/
		setDepthTest(on : boolean) : void;		
		/** set color for clear screen.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js 
		*/
		setClearColor(clearColor : Color) : void;		
		/** Sets the view, where everything is rendered, do not call this function.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		setOpenGLView(openGLView : View) : void;		
		/** Sets an OpenGL projection.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		setProjection(projection : number) : void;		
		/** Update the view port.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		setViewport() : void;		
		/** Get the View, where everything is rendered.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		getOpenGLView() : View;		
		/** Sets an OpenGL projection.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		getProjection() : number;		
		/** Enables/disables OpenGL alpha blending.<br/>
		Implementation can be found in CCDirectorCanvas.js/CCDirectorWebGL.js. 
		*/
		setAlphaBlending(on : boolean) : void;		
		/** Returns whether or not the replaced scene will receive the cleanup message.<br>
		If the new scene is pushed, then the old scene won't receive the "cleanup" message.<br/>
		If the new scene replaces the old one, the it will receive the "cleanup" message. 
		*/
		isSendCleanupToScene() : boolean;		
		/** Returns current logic Scene.
		
		@example 
		```js
		// This will help you to get the Canvas node in scene
		 cc.director.getScene().getChildByName('Canvas');
		``` 
		*/
		getScene() : Scene;		
		/** Returns the FPS value. 
		*/
		getAnimationInterval() : number;		
		/** Returns whether or not to display the FPS informations. 
		*/
		isDisplayStats() : boolean;		
		/** Sets whether display the FPS on the bottom-left corner. 
		*/
		setDisplayStats(displayStats : boolean) : void;		
		/** Returns seconds per frame. 
		*/
		getSecondsPerFrame() : number;		
		/** Returns whether next delta time equals to zero 
		*/
		isNextDeltaTimeZero() : boolean;		
		/** Returns whether or not the Director is paused 
		*/
		isPaused() : boolean;		
		/** Returns how many frames were called since the director started 
		*/
		getTotalFrames() : number;		
		/** Returns the cc.Scheduler associated with this director. 
		*/
		getScheduler() : Scheduler;		
		/** Sets the cc.Scheduler associated with this director. 
		*/
		setScheduler(scheduler : Scheduler) : void;		
		/** Returns the cc.ActionManager associated with this director. 
		*/
		getActionManager() : ActionManager;		
		/** Sets the cc.ActionManager associated with this director. 
		*/
		setActionManager(actionManager : ActionManager) : void;		
		/** Returns the cc.AnimationManager associated with this director. 
		*/
		getAnimationManager() : AnimationManager;		
		/** Returns the delta time since last frame. 
		*/
		getDeltaTime() : number;	
	}		
		/** cc.game is the singleton object for game related functions. */
		export class Game {		
		/** The outer frame of the game canvas, parent of cc.container. */
		frame : any;		
		/** The container of game canvas, equals to cc.container. */
		container : any;		
		/** The canvas of the game, equals to cc._canvas. */
		canvas : any;		
		/** The current game configuration, including:
		1. debugMode
		     "debugMode" possible values :
		     0 - No message will be printed.
		     1 - cc.error, cc.assert, cc.warn, cc.log will print in console.
		     2 - cc.error, cc.assert, cc.warn will print in console.
		     3 - cc.error, cc.assert will print in console.
		     4 - cc.error, cc.assert, cc.warn, cc.log will print on canvas, available only on web.
		     5 - cc.error, cc.assert, cc.warn will print on canvas, available only on web.
		     6 - cc.error, cc.assert will print on canvas, available only on web.
		2. showFPS
		     Left bottom corner fps information will show when "showFPS" equals true, otherwise it will be hide.
		3. frameRate
		     "frameRate" set the wanted frame rate for your game, but the real fps depends on your game implementation and the running environment.
		4. id
		     "gameCanvas" sets the id of your canvas element on the web page, it's useful only on web.
		5. renderMode
		     "renderMode" sets the renderer type, only useful on web :
		     0 - Automatically chosen by engine
		     1 - Forced to use canvas renderer
		     2 - Forced to use WebGL renderer, but this will be ignored on mobile browsers
		6. scenes
		     "scenes" include available scenes in the current bundle.
		
		Please DO NOT modify this object directly, it won't have any effect. */
		config : any;		
		/** Callback when the scripts of engine have been load. 
		*/
		onStart() : void;		
		/** Callback when game exits. 
		*/
		onStop() : void;		
		/** Set frameRate of game. 
		*/
		setFrameRate(frameRate : number) : void;		
		/** Run the game frame by frame. 
		*/
		step() : void;		
		/** Pause the game. 
		*/
		pause() : void;		
		/** Resume the game from pause. 
		*/
		resume() : void;		
		/** Check whether the game is paused. 
		*/
		isPaused() : boolean;		
		/** Restart game. 
		*/
		restart() : void;		
		/** Prepare game. 
		*/
		prepare(cb : Function) : void;		
		/** Run game with configuration object and onStart function.
		@param config Pass configuration object or onStart function
		@param onStart function to be executed after game initialized 
		*/
		run(config? : any|Function, onStart? : Function) : void;		
		/** Add a persistent root node to the game, the persistent node won't be destroyed during scene transition.
		The target node must be placed in the root level of hierarchy, otherwise this API won't have any effect.
		@param node The node to be made persistent 
		*/
		addPersistRootNode(node : Node) : void;		
		/** Remove a persistent root node
		@param node The node to be removed from persistent node list 
		*/
		removePersistRootNode(node : Node) : void;		
		/** Check whether the node is a persistent root node
		@param node The node to be checked 
		*/
		isPersistRootNode(node : Node) : boolean;	
	}		
		/** Class of all entities in Cocos Creator scenes.
		Node also inherits from {{#crossLink "EventTarget"}}Event Target{{/crossLink}}, it permits Node to dispatch events.
		For events supported by Node, please refer to {{#crossLink "Node.EventType"}}{{/crossLink}} */
		export class Node extends _BaseNode {		
		/** The local active state of this node. */
		active : boolean;		
		/** Indicates whether this node is active in the scene. */
		activeInHierarchy : boolean;		
		/** Returns the component of supplied type if the node has one attached, null if it doesn't.
		You can also get component in the node by passing in the name of the script. 
		*/
		getComponent(typeOrClassName : Function|string) : Component;		
		/** Returns all components of supplied Type in the node. 
		*/
		getComponents(typeOrClassName : Function|string) : Component[];		
		/** Returns the component of supplied type in any of its children using depth first search. 
		*/
		getComponentInChildren(typeOrClassName : Function|string) : Component;		
		/** Returns the components of supplied type in any of its children using depth first search. 
		*/
		getComponentsInChildren(typeOrClassName : Function|string) : Component[];		
		/** Adds a component class to the node. You can also add component to node by passing in the name of the script.
		@param typeOrClassName The constructor or the class name of the component to add 
		*/
		addComponent(typeOrClassName : Function|string) : Component;		
		/** Removes a component identified by the given name or removes the component object given.
		You can also use component.destroy() if you already have the reference.
		@param component The need remove component. 
		*/
		removeComponent(component : string|Function|Component) : void;		
		/** Register an callback of a specific event type on Node.
		Use this method to register touch or mouse event permit propagation based on scene graph,
		you can propagate the event to the parents or swallow it by calling stopPropagation on the event.
		It's the recommended way to register touch/mouse event for Node,
		please do not use cc.eventManager directly for Node.
		@param type A string representing the event type to listen for.
		@param callback The callback that will be invoked when the event is dispatched.
		                             The callback is ignored if it is a duplicate (the callbacks are unique).
		@param target The target to invoke the callback, can be null 
		*/
		on(type : string, callback: (param: Event) => void, target? : any) : Function;		
		/** Removes the callback previously registered with the same type, callback, target and or useCapture.
		This method is merely an alias to removeEventListener.
		@param type A string representing the event type being removed.
		@param callback The callback to remove.
		@param target The target to invoke the callback, if it's not given, only callback without target will be removed 
		*/
		off(type : string, callback : Function, target? : any) : void;		
		/** Removes all callbacks previously registered with the same target.
		@param target The target to be searched for all related callbacks 
		*/
		targetOff(target : any) : void;		
		/** Executes an action, and returns the action that is executed.<br/>
		The node becomes the action's target. Refer to cc.Action's getTarget()
		Calling runAction while the node is not active won't have any effect 
		*/
		runAction(action : Action) : Action;		
		/** Stops and removes all actions from the running action list . 
		*/
		stopAllActions() : void;		
		/** Stops and removes an action from the running action list.
		@param action An action object to be removed. 
		*/
		stopAction(action : Action) : void;		
		/** Removes an action from the running action list by its tag.
		@param tag A tag that indicates the action to be removed. 
		*/
		stopActionByTag(tag : number) : void;		
		/** Returns an action from the running action list by its tag. 
		*/
		getActionByTag(tag : number) : Action;		
		/** Composable actions are counted as 1 action. Example:<br/>
		If you are running 1 Sequence of 7 actions, it will return 1. <br/>
		If you are running 7 Sequences of 2 actions, it will return 7.</p> 
		*/
		getNumberOfRunningActions() : number;	
	}		
		/** Class for scene handling. */
		export class Scene extends Asset {		
		constructor();	
	}		
		/** <p>
		   Scheduler is responsible of triggering the scheduled callbacks.<br/>
		   You should not use NSTimer. Instead use this class.<br/>
		   <br/>
		   There are 2 different types of callbacks (selectors):<br/>
		      - update callback: the 'update' callback will be called every frame. You can customize the priority.<br/>
		      - custom callback: A custom callback will be called every frame, or with a custom interval of time<br/>
		      <br/>
		   The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update callback'. *
		</p> */
		export class Scheduler {		
		/** <p>
		   Modifies the time of all scheduled callbacks.<br/>
		   You can use this property to create a 'slow motion' or 'fast forward' effect.<br/>
		   Default is 1.0. To create a 'slow motion' effect, use values below 1.0.<br/>
		   To create a 'fast forward' effect, use values higher than 1.0.<br/> 
		*/
		setTimeScale(timeScale : number) : void;		
		/** Returns time scale of scheduler. 
		*/
		getTimeScale() : number;		
		/** 'update' the scheduler. (You should NEVER call this method, unless you know what you are doing.)
		@param dt delta time 
		*/
		update(dt : number) : void;		
		/** <p>
		  The scheduled method will be called every 'interval' seconds.</br>
		  If paused is YES, then it won't be called until it is resumed.<br/>
		  If 'interval' is 0, it will be called every frame, but if so, it recommended to use 'scheduleUpdateForTarget:' instead.<br/>
		  If the callback function is already scheduled, then only the interval parameter will be updated without re-scheduling it again.<br/>
		  repeat let the action be repeated repeat + 1 times, use cc.macro.REPEAT_FOREVER to let the action run continuously<br/>
		  delay is the amount of time the action will wait before it'll start<br/>
		</p>
		
		@example 
		```js
		-------------------
		//register a schedule to scheduler
		cc.director.getScheduler().scheduleCallbackForTarget(this, function, interval, repeat, delay, !this._isRunning );
		
		``` 
		*/
		scheduleCallbackForTarget(target : any, callback_fn : Function, interval : number, repeat : number, delay : number, paused : boolean) : void;		
		/** The schedule
		
		@example 
		```js
		-------------------
		//register a schedule to scheduler
		cc.director.getScheduler().schedule(callback, this, interval, !this._isRunning);
		
		``` 
		*/
		schedule(callback : Function, target : any, interval : number, repeat : number, delay : number, paused : boolean) : void;		
		/** <p>
		 Pause all selectors from all targets.<br/>
		 You should NEVER call this method, unless you know what you are doing.
		</p> 
		*/
		pauseAllTargets() : void;		
		/** Pause all selectors from all targets with a minimum priority. <br/>
		You should only call this with kCCPriorityNonSystemMin or higher. 
		*/
		pauseAllTargetsWithMinPriority(minPriority : number) : void;		
		/** Resume selectors on a set of targets.<br/>
		This can be useful for undoing a call to pauseAllCallbacks. 
		*/
		resumeTargets(targetsToResume : any[]) : void;		
		/** <p>
		   Pauses the target.<br/>
		   All scheduled selectors/update for a given target won't be 'ticked' until the target is resumed.<br/>
		   If the target is not present, nothing happens.
		</p> 
		*/
		pauseTarget(target : any) : void;		
		/** Resumes the target.<br/>
		The 'target' will be unpaused, so all schedule selectors/update will be 'ticked' again.<br/>
		If the target is not present, nothing happens. 
		*/
		resumeTarget(target : any) : void;		
		/** Returns whether or not the target is paused 
		*/
		isTargetPaused(target : any) : boolean;		
		/** <p>
		   Schedules the 'update' callback_fn for a given target with a given priority.<br/>
		   The 'update' callback_fn will be called every frame.<br/>
		   The lower the priority, the earlier it is called.
		</p>
		
		@example 
		```js
		-------------------
		//register this object to scheduler
		cc.director.getScheduler().scheduleUpdateForTarget(this, priority, !this._isRunning );
		
		``` 
		*/
		scheduleUpdateForTarget(target : any, priority : number, paused : boolean) : void;		
		/** <p>
		  Unschedule a callback function for a given target.<br/>
		  If you want to unschedule the "update", use unscheudleUpdateForTarget.
		</p>
		@param callback callback[Function] or key[String]
		
		@example 
		```js
		-------------------
		//unschedule a callback of target
		cc.director.getScheduler().unscheduleCallbackForTarget(function, this);
		
		``` 
		*/
		unscheduleCallbackForTarget(target : any, callback : Function) : void;		
		/** Unschedules the update callback function for a given target
		
		@example 
		```js
		-------------------
		//unschedules the "update" method.
		cc.director.getScheduler().unscheduleUpdateForTarget(this);
		
		``` 
		*/
		unscheduleUpdateForTarget(target : any) : void;		
		/** Unschedules all function callbacks for a given target. This also includes the "update" callback function. 
		*/
		unscheduleAllCallbacksForTarget(target : any) : void;		
		/** <p>
		    Unschedules all function callbacks from all targets. <br/>
		    You should NEVER call this method, unless you know what you are doing.
		</p> 
		*/
		unscheduleAllCallbacks() : void;		
		/** <p>
		   Unschedules all function callbacks from all targets with a minimum priority.<br/>
		   You should only call this with kCCPriorityNonSystemMin or higher.
		</p> 
		*/
		unscheduleAllCallbacksWithMinPriority(minPriority : number) : void;		
		/** Priority level reserved for system services. */
		PRIORITY_SYSTEM : number;		
		/** Minimum priority level for user scheduling. */
		PRIORITY_NON_SYSTEM : number;	
	}		
		/** Particle System base class. <br/>
		Attributes of a Particle System:<br/>
		 - emmision rate of the particles<br/>
		 - Gravity Mode (Mode A): <br/>
		 - gravity <br/>
		 - direction <br/>
		 - speed +-  variance <br/>
		 - tangential acceleration +- variance<br/>
		 - radial acceleration +- variance<br/>
		 - Radius Mode (Mode B):      <br/>
		 - startRadius +- variance    <br/>
		 - endRadius +- variance      <br/>
		 - rotate +- variance         <br/>
		 - Properties common to all modes: <br/>
		 - life +- life variance      <br/>
		 - start spin +- variance     <br/>
		 - end spin +- variance       <br/>
		 - start size +- variance     <br/>
		 - end size +- variance       <br/>
		 - start color +- variance    <br/>
		 - end color +- variance      <br/>
		 - life +- variance           <br/>
		 - blending function          <br/>
		 - texture                    <br/>
		<br/>
		cocos2d also supports particles generated by Particle Designer (http://particledesigner.71squared.com/).<br/>
		'Radius Mode' in Particle Designer uses a fixed emit rate of 30 hz. Since that can't be guarateed in cocos2d,  <br/>
		cocos2d uses a another approach, but the results are almost identical.<br/>
		cocos2d supports all the variables used by Particle Designer plus a bit more:  <br/>
		 - spinning particles (supported when using ParticleSystem)       <br/>
		 - tangential acceleration (Gravity mode)                               <br/>
		 - radial acceleration (Gravity mode)                                   <br/>
		 - radius direction (Radius mode) (Particle Designer supports outwards to inwards direction only) <br/>
		It is possible to customize any of the above mentioned properties in runtime. Example:   <br/> */
		export class ParticleSystem extends cc._RendererUnderSG {		
		/** !#en Play particle in edit mode.
		!#zh 在编辑器模式下预览粒子，启用后选中粒子时，粒子将自动播放。 */
		preview : boolean;		
		/** !#en
		If set custom to true, then use custom properties insteadof read particle file.
		!#zh 是否自定义粒子属性。 */
		custom : boolean;		
		/** !#en The plist file.
		!#zh plist 格式的粒子配置文件。 */
		file : string;		
		/** . */
		texture : Texture2D;		
		/** !#en Current quantity of particles that are being simulated.
		!#zh 当前播放的粒子数量。 */
		particleCount : number;		
		/** !#en Specify the source Blend Factor.
		!#zh 指定原图混合模式。 */
		srcBlendFactor : BlendFactor;		
		/** !#en Specify the destination Blend Factor.
		!#zh 指定目标的混合模式。 */
		dstBlendFactor : BlendFactor;		
		/** !#en If set to true, the particle system will automatically start playing on onLoad.
		!#zh 如果设置为 true 运行时会自动发射粒子。 */
		playOnLoad : boolean;		
		/** !#en Indicate whether the owner node will be auto-removed when it has no particles left.
		!#zh 粒子播放完毕后自动销毁所在的节点。 */
		autoRemoveOnFinish : boolean;		
		/** !#en Indicate whether the particle system is activated.
		!#zh 是否激活粒子。 */
		active : boolean;		
		/** !#en Maximum particles of the system.
		!#zh 粒子最大数量。 */
		totalParticles : number;		
		/** !#en How many seconds the emitter wil run. -1 means 'forever'.
		!#zh 发射器生存时间，单位秒，-1表示持续发射。 */
		duration : number;		
		/** !#en Emission rate of the particles.
		!#zh 每秒发射的粒子数目。 */
		emissionRate : number;		
		/** !#en Life of each particle setter.
		!#zh 粒子的运行时间。 */
		life : number;		
		/** !#en Variation of life.
		!#zh 粒子的运行时间变化范围。 */
		lifeVar : number;		
		/** !#en Start color of each particle.
		!#zh 粒子初始颜色。 */
		startColor : Color;		
		/** !#en Variation of the start color.
		!#zh 粒子初始颜色变化范围。 */
		startColorVar : Color;		
		/** !#en Ending color of each particle.
		!#zh 粒子结束颜色。 */
		endColor : Color;		
		/** !#en Variation of the end color.
		!#zh 粒子结束颜色变化范围。 */
		endColorVar : Color;		
		/** !#en Angle of each particle setter.
		!#zh 粒子角度。 */
		angle : number;		
		/** !#en Variation of angle of each particle setter.
		!#zh 粒子角度变化范围。 */
		angleVar : number;		
		/** !#en Start size in pixels of each particle.
		!#zh 粒子的初始大小。 */
		startSize : number;		
		/** !#en Variation of start size in pixels.
		!#zh 粒子初始大小的变化范围。 */
		startSizeVar : number;		
		/** !#en End size in pixels of each particle.
		!#zh 粒子结束时的大小。 */
		endSize : number;		
		/** !#en Variation of end size in pixels.
		!#zh 粒子结束大小的变化范围。 */
		endSizeVar : number;		
		/** !#en Start angle of each particle.
		!#zh 粒子开始自旋角度。 */
		startSpin : number;		
		/** !#en Variation of start angle.
		!#zh 粒子开始自旋角度变化范围。 */
		startSpinVar : number;		
		/** !#en End angle of each particle.
		!#zh 粒子结束自旋角度。 */
		endSpin : number;		
		/** !#en Variation of end angle.
		!#zh 粒子结束自旋角度变化范围。 */
		endSpinVar : number;		
		/** !#en Source position of the emitter.
		!#zh 发射器位置。 */
		sourcePos : Vec2;		
		/** !#en Variation of source position.
		!#zh 发射器位置的变化范围。（横向和纵向） */
		posVar : Vec2;		
		/** !#en Particles movement type.
		!#zh 粒子位置类型。 */
		positionType : ParticleSystem.PositionType;		
		/** !#en Particles emitter modes.
		!#zh 发射器类型。 */
		emitterMode : ParticleSystem.EmitterMode;		
		/** !#en Gravity of the emitter.
		!#zh 重力。 */
		gravity : Vec2;		
		/** !#en Speed of the emitter.
		!#zh 速度。 */
		speed : number;		
		/** !#en Variation of the speed.
		!#zh 速度变化范围。 */
		speedVar : number;		
		/** !#en Tangential acceleration of each particle. Only available in 'Gravity' mode.
		!#zh 每个粒子的切向加速度，即垂直于重力方向的加速度，只有在重力模式下可用。 */
		tangentialAccel : number;		
		/** !#en Variation of the tangential acceleration.
		!#zh 每个粒子的切向加速度变化范围。 */
		tangentialAccelVar : number;		
		/** !#en Acceleration of each particle. Only available in 'Gravity' mode.
		!#zh 粒子径向加速度，即平行于重力方向的加速度，只有在重力模式下可用。 */
		radialAccel : number;		
		/** !#en Variation of the radial acceleration.
		!#zh 粒子径向加速度变化范围。 */
		radialAccelVar : number;		
		/** !#en Indicate whether the rotation of each particle equals to its direction. Only available in 'Gravity' mode.
		!#zh 每个粒子的旋转是否等于其方向，只有在重力模式下可用。 */
		rotationIsDir : boolean;		
		/** !#en Starting radius of the particles. Only available in 'Radius' mode.
		!#zh 初始半径，表示粒子出生时相对发射器的距离，只有在半径模式下可用。 */
		startRadius : number;		
		/** !#en Variation of the starting radius.
		!#zh 初始半径变化范围。 */
		startRadiusVar : number;		
		/** !#en Ending radius of the particles. Only available in 'Radius' mode.
		!#zh 结束半径，只有在半径模式下可用。 */
		endRadius : number;		
		/** !#en Variation of the ending radius.
		!#zh 结束半径变化范围。 */
		endRadiusVar : number;		
		/** !#en Number of degress to rotate a particle around the source pos per second. Only available in 'Radius' mode.
		!#zh 粒子每秒围绕起始点的旋转角度，只有在半径模式下可用。 */
		rotatePerS : number;		
		/** !#en Variation of the degress to rotate a particle around the source pos per second.
		!#zh 粒子每秒围绕起始点的旋转角度变化范围。 */
		rotatePerSVar : number;		
		/** !#en The Particle emitter lives forever.
		!#zh 表示发射器永久存在 */
		DURATION_INFINITY : number;		
		/** !#en The starting size of the particle is equal to the ending size.
		!#zh 表示粒子的起始大小等于结束大小。 */
		START_SIZE_EQUAL_TO_END_SIZE : number;		
		/** !#en The starting radius of the particle is equal to the ending radius.
		!#zh 表示粒子的起始半径等于结束半径。 */
		START_RADIUS_EQUAL_TO_END_RADIUS : number;		
		/** !#en Add a particle to the emitter.
		!#zh 添加一个粒子到发射器中。 
		*/
		addParticle() : boolean;		
		/** !#en Stop emitting particles. Running particles will continue to run until they die.
		!#zh 停止发射器发射粒子，发射出去的粒子将继续运行，直至粒子生命结束。
		
		@example 
		```js
		// stop particle system.
		myParticleSystem.stopSystem();
		``` 
		*/
		stopSystem() : void;		
		/** !#en Kill all living particles.
		!#zh 杀死所有存在的粒子，然后重新启动粒子发射器。
		
		@example 
		```js
		// play particle system.
		myParticleSystem.resetSystem();
		``` 
		*/
		resetSystem() : void;		
		/** !#en Whether or not the system is full.
		!#zh 发射器中粒子是否大于等于设置的总粒子数量。 
		*/
		isFull() : boolean;		
		/** !#en
		<p> Sets a new CCSpriteFrame as particle.</br>
		WARNING: this method is experimental. Use setTextureWithRect instead.
		</p>
		!#zh
		<p> 设置一个新的精灵帧为粒子。</br>
		警告：这个函数只是试验，请使用 setTextureWithRect 实现。
		</p> 
		*/
		setDisplayFrame(spriteFrame : SpriteFrame) : void;		
		/** !#en Sets a new texture with a rect. The rect is in texture position and size.
		!#zh 设置一张新贴图和关联的矩形。 
		*/
		setTextureWithRect(texture : Texture2D, rect : Rect) : void;	
	}		
		/** Render the TMX layer. */
		export class TiledLayer extends _SGComponent {		
		/** Gets the layer name 
		*/
		getLayerName() : string;		
		/** Set the layer name 
		*/
		SetLayerName(layerName : string) : void;		
		/** Return the value for the specific property name 
		*/
		getProperty(propertyName : string) : any;		
		/** Returns the position in pixels of a given tile coordinate
		@param pos position or x 
		*/
		getPositionAt(pos : Vec2|number, y? : number) : Vec2;		
		/** Removes a tile at given tile coordinate
		@param pos position or x 
		*/
		removeTileAt(pos : Vec2|number, y? : number) : void;		
		/** <p>Sets the tile gid (gid = tile global id) at a given tile coordinate.<br />
		The Tile GID can be obtained by using the method "tileGIDAt" or by using the TMX editor . Tileset Mgr +1.<br />
		If a tile is already placed at that position, then it will be removed.</p>
		@param posOrX position or x
		@param flagsOrY flags or y 
		*/
		setTileGID(gid : number, posOrX : Vec2|number, flagsOrY : number, flags? : number) : void;		
		/** Returns the tile gid at a given tile coordinate. <br />
		if it returns 0, it means that the tile is empty. <br />
		This method requires the the tile map has not been previously released (eg. don't call layer.releaseMap())<br />
		@param pos or x 
		*/
		getTileGIDAt(pos : Vec2|number, y? : number) : number;		
		/** <p>Returns the tile (_ccsg.Sprite) at a given a tile coordinate. <br/>
		The returned _ccsg.Sprite will be already added to the _ccsg.TMXLayer. Don't add it again.<br/>
		The _ccsg.Sprite can be treated like any other _ccsg.Sprite: rotated, scaled, translated, opacity, color, etc. <br/>
		You can remove either by calling: <br/>
		- layer.removeChild(sprite, cleanup); <br/>
		- or layer.removeTileAt(ccp(x,y)); </p>
		@param pos or x 
		*/
		getTileAt(pos : cc.Vec2|number, y? : number) : _ccsg.Sprite;		
		/** <p>Dealloc the map that contains the tile position from memory. <br />
		Unless you want to know at runtime the tiles positions, you can safely call this method. <br />
		If you are going to call layer.getTileGIDAt() then, don't release the map</p> 
		*/
		releaseMap() : void;		
		/** Sets the untransformed size of the _ccsg.TMXLayer.
		@param size The untransformed size of the _ccsg.TMXLayer or The untransformed size's width of the TMXLayer.
		@param height The untransformed size's height of the _ccsg.TMXLayer. 
		*/
		setContentSize(size : cc.Size|number, height? : number) : void;		
		/** Return texture of cc.SpriteBatchNode 
		*/
		getTexture() : cc.Texture2D;		
		/** Set the texture of cc.SpriteBatchNode 
		*/
		setTexture(texture : cc.Texture2D) : void;		
		/** Gets layer size. 
		*/
		getLayerSize() : cc.Size;		
		/** Set layer size 
		*/
		setLayerSize(layerSize : cc.Size) : void;		
		/** Size of the map's tile (could be different from the tile's size) 
		*/
		getMapTileSize() : cc.Size;		
		/** Set the map tile size. 
		*/
		setMapTileSize(tileSize : cc.Size) : void;		
		/** Pointer to the map of tiles 
		*/
		getTiles() : any[];		
		/** Pointer to the map of tiles 
		*/
		setTiles(tiles : any[]) : void;		
		/** Tile set information for the layer 
		*/
		getTileset() : cc.TMXTilesetInfo;		
		/** Tile set information for the layer 
		*/
		setTileset(tileset : cc.TMXTilesetInfo) : void;		
		/** Layer orientation, which is the same as the map orientation 
		*/
		getLayerOrientation() : number;		
		/** Layer orientation, which is the same as the map orientation 
		*/
		setLayerOrientation(orientation : number) : void;		
		/** properties from the layer. They can be added using Tiled 
		*/
		getProperties() : any[];		
		/** properties from the layer. They can be added using Tiled 
		*/
		setProperties(properties : any[]) : void;	
	}		
		/** Renders a TMX Tile Map in the scene. */
		export class TiledMap extends Component {		
		/** The tmx file. */
		tmxFile : string;		
		/** The event handler to be called when the map is loaded. */
		mapLoaded : cc.Component.EventHandler;		
		/** Gets the map size. 
		*/
		getMapSize() : cc.Size;		
		/** Set the map size. 
		*/
		setMapSize(mapSize : cc.Size) : void;		
		/** Gets the tile size. 
		*/
		getTileSize() : cc.Size;		
		/** Set the tile size 
		*/
		setTileSize(tileSize : cc.Size) : void;		
		/** map orientation 
		*/
		getMapOrientation() : number;		
		/** map orientation 
		*/
		setMapOrientation(orientation : number) : void;		
		/** object groups 
		*/
		getObjectGroups() : any[];		
		/** object groups 
		*/
		setObjectGroups(groups : any[]) : void;		
		/** Gets the map properties 
		*/
		getProperties() : any;		
		/** Set the map properties 
		*/
		setProperties(properties : any) : void;		
		/** Initializes the instance of cc.TiledMap with tmxFile.
		The mapLoaded events will be emitted when the map is loaded. 
		*/
		initWithTMXFile(tmxFile : string) : void;		
		/** Initializes the instance of cc.TiledMap with tmxString.
		The mapLoaded events will be emitted when the map is loaded. 
		*/
		initWithXML(tmxString : string, resourcePath : string) : void;		
		/** Return All layers array. 
		*/
		allLayers() : any[];		
		/** return the cc.TiledLayer for the specific layer 
		*/
		getLayer(layerName : string) : cc.TiledLayer;		
		/** Return the TMXObjectGroup for the specific group 
		*/
		getObjectGroup(groupName : string) : cc.TMXObjectGroup;		
		/** Return the value for the specific property name 
		*/
		getProperty(propertyName : string) : string;		
		/** Return properties dictionary for tile GID 
		*/
		getPropertiesForGID(GID : number) : any;	
	}		
		/** <p>
		 cc.pool is a singleton object serves as an object cache pool.<br/>
		 It can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
		 Some common use case is :<br/>
		     1. Bullets in game (die very soon, massive creation and recreation, no side effect on other objects)<br/>
		     2. Blocks in candy crash (massive creation and recreation)<br/>
		     etc...
		</p> */
		export class pool {		
		/** Put the obj in pool.
		@param obj The need put in pool object.
		
		@example 
		```js
		---------------------------------
		var sp = new _ccsg.Sprite("a.png");
		this.addChild(sp);
		cc.pool.putInPool(sp);
		cc.pool.getFromPool(_ccsg.Sprite, "a.png");
		
		``` 
		*/
		putInPool(obj : any) : void;		
		/** Check if this kind of obj has already in pool.
		@param objClass The check object class. 
		*/
		hasObject(objClass : any) : boolean;		
		/** Remove the obj if you want to delete it. 
		*/
		removeObject() : void;		
		/** Get the obj from pool. 
		*/
		getFromPool() : any;		
		/** Remove all objs in pool and reset the pool. 
		*/
		drainAllPools() : void;	
	}		
		/** Base class for handling assets used in Fireball. This class can be instantiate.
		
		You may want to override:
		- createNode
		- cc.Object._serialize
		- cc.Object._deserialize */
		export class Asset extends RawAsset {		
		constructor();		
		/** Returns the url of this asset's first raw file, if none of rawFile exists,
		it will returns the url of this serialized asset. */
		url : string;		
		/** Returns the url of this asset's raw files, if none of rawFile exists,
		it will returns an empty array. */
		urls : String[];		
		/** Create a new node using this asset in the scene.
		If this type of asset dont have its corresponding node type, this method should be null. 
		*/
		createNode(callback: (error: string, node: any) => void) : void;	
	}		
		/** Class for audio data handling. */
		export class AudioClip extends RawAsset {		
		constructor();	
	}		
		/** Class for BitmapFont handling. */
		export class BitmapFont extends RawAsset {		
		constructor();	
	}		
		/** Class for Font handling. */
		export class Font extends RawAsset {		
		constructor();	
	}		
		/** Class for prefab handling. */
		export class Prefab extends Asset {		
		constructor();	
	}		
		/** The base class for registering asset types.
		
		You may want to override:
		- createNode (static) */
		export class RawAsset extends CCObject {		
		/** Create a new node in the scene.
		If this type of asset dont have its corresponding node type, this method should be null. 
		*/
		createNodeByInfo(Info : any, callback: (error: string, node: any) => void) : void;	
	}		
		/** Class for script handling. */
		export class _Script extends Asset {		
		constructor();	
	}		
		/** Class for JavaScript handling. */
		export class _JavaScript extends Asset {		
		constructor();	
	}		
		/** Class for coffee script handling. */
		export class CoffeeScript extends Asset {		
		constructor();	
	}		
		/** Class for sprite animation asset handling. */
		export class SpriteAnimationAsset extends Asset {		
		constructor();		
		loop : boolean;		
		delay : number;	
	}		
		/** Class for sprite atlas handling. */
		export class SpriteAtlas extends RawAsset {		
		constructor();	
	}		
		/** Class for TTFFont handling. */
		export class TTFFont extends Asset {		
		constructor();	
	}		
		/** Class for text file. */
		export class TextAsset extends Asset {		
		constructor();	
	}		
		/** undefined */
		export class Animation extends CCComponent {		
		/** Animation will play the default clip when start game */
		defaultClip : AnimationClip;		
		/** Current played clip */
		currentClip : AnimationClip;		
		/** Whether the animation should auto play the default clip when start game. */
		playOnLoad : boolean;		
		/** Get all the clips used in this animation 
		*/
		getClips() : AnimationClip[];		
		/** Plays an animation and stop other animations.
		@param name The name of animation to play. If no name is supplied then the default animation will be played.
		@param startTime play an animation from startTime 
		*/
		play(name? : string, startTime? : number) : AnimationState;		
		/** Plays an additive animation, it will not stop other animations.
		If there are other animations playing, then will play several animations at the same time.
		@param name The name of animation to play. If no name is supplied then the default animation will be played.
		@param startTime play an animation from startTime 
		*/
		playAdditive(name? : string, startTime? : number) : AnimationState;		
		/** Stops an animation named name. If no name is supplied then stops all playing animations that were started with this Animation.
		Stopping an animation also Rewinds it to the Start.
		@param name The animation to stop, if not supplied then stops all playing animations. 
		*/
		stop(name? : string) : void;		
		/** Pauses an animation named name. If no name is supplied then pauses all playing animations that were started with this Animation.
		@param name The animation to pauses, if not supplied then pauses all playing animations. 
		*/
		pause(name? : string) : void;		
		/** Resumes an animation named name. If no name is supplied then resumes all paused animations that were started with this Animation.
		@param name The animation to resumes, if not supplied then resumes all paused animations. 
		*/
		resume(name? : string) : void;		
		/** Make an animation named name go to the specified time. If no name is supplied then make all animations go to the specified time.
		@param time The time to go to
		@param name Specified animation name, if not supplied then make all animations go to the time. 
		*/
		setCurrentTime(time? : number, name? : string) : void;		
		/** Returns the animation state named name. If no animation with the specified name, the function will return null. 
		*/
		getAnimationState(name : string) : AnimationState;		
		/** Adds a clip to the animation with name newName. If a clip with that name already exists it will be replaced with the new clip.
		@param clip the clip to add 
		*/
		addClip(clip : AnimationClip, newName? : string) : AnimationState;		
		/** Remove clip from the animation list. This will remove the clip and any animation states based on it.
		@param force If force is true, then will always remove the clip and any animation states based on it. 
		*/
		removeClip(clip : AnimationClip, force : boolean) : void;		
		/** Samples animations at the current state.
		This is useful when you explicitly want to set up some animation state, and sample it once. 
		*/
		sample() : void;	
	}		
		/** Audio Source. */
		export class AudioSource extends Component {		
		/** Is the audio source playing (Read Only) */
		isPlaying : boolean;		
		/** The clip of the audio source. */
		clip : AudioClip;		
		/** The volume of the audio source. */
		volume : number;		
		/** Is the audio source mute? */
		mute : boolean;		
		/** Is the audio source looping? */
		loop : boolean;		
		/** If set to true, the audio source will automatically start playing on onLoad. */
		playOnLoad : boolean;		
		/** Plays the clip. 
		*/
		play() : void;		
		/** Stops the clip 
		*/
		stop() : void;		
		/** Pause the clip. 
		*/
		pause() : void;		
		/** Resume the clip. 
		*/
		resume() : void;		
		/** Rewind playing music. 
		*/
		rewind() : void;	
	}		
		/** Button has 3 Transition types
		When Button state changed:
		 If Transition type is Button.Transition.NONE, Button will do nothing
		 If Transition type is Button.Transition.COLOR, Button will change target's color
		 If Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite
		
		Button will trigger 5 events:
		 Button.EVENT_TOUCH_DOWN
		 Button.EVENT_TOUCH_UP
		 Button.EVENT_HOVER_IN
		 Button.EVENT_HOVER_MOVE
		 Button.EVENT_HOVER_OUT */
		export class Button extends Component {		
		/** Whether the Button is disabled.
		If true, the Button will trigger event and do transition. */
		interactable : boolean;		
		/** Transition type */
		transition : Button.Transition;		
		/** Normal state color */
		normalColor : cc.Color;		
		/** Pressed state color */
		pressedColor : cc.Color;		
		/** Hover state color */
		hoverColor : cc.Color;		
		/** Disabled state color */
		disabledColor : cc.Color;		
		/** Color transition duration */
		duration : number;		
		/** Normal state sprite */
		normalSprite : cc.SpriteFrame;		
		/** Pressed state sprite */
		pressedSprite : cc.SpriteFrame;		
		/** Hover state sprite */
		hoverSprite : cc.SpriteFrame;		
		/** Disabled state sprite */
		disabledSprite : cc.SpriteFrame;		
		/** Transition target.
		When Button state changed:
		 If Transition type is Button.Transition.NONE, Button will do nothing
		 If Transition type is Button.Transition.COLOR, Button will change target's color
		 If Transition type is Button.Transition.SPRITE, Button will change target Sprite's sprite */
		target : cc.Node;		
		/** If Button is clicked, it will trigger event's handler */
		clickEvents : cc.Component.EventHandler[];	
	}		
		/** !#zh: 作为 UI 根节点，为所有子节点提供视窗四边的位置信息以供对齐，另外提供屏幕适配策略接口，方便从编辑器设置。
		注：由于本节点的尺寸会跟随屏幕拉伸，所以 anchorPoint 只支持 (0.5, 0.5)，否则适配不同屏幕时坐标会有偏差。 */
		export class Canvas extends Component {		
		/** Current active canvas, the scene should only have one active canvas at the same time. */
		instance : Canvas;		
		/** The desigin resolution for current scene. */
		designResolution : cc.Size;		
		/** !#zh: 是否优先将设计分辨率高度撑满视图高度 */
		fitHeight : boolean;		
		/** !#zh: 是否优先将设计分辨率宽度撑满视图宽度 */
		fitWidth : boolean;	
	}		
		/** Base class for everything attached to Node(Entity).
		
		NOTE: Not allowed to use construction parameters for Component's subclasses,
		      because Component is created by the engine. */
		export class Component extends Object {		
		constructor();		
		/** The node this component is attached to. A component is always attached to a node. */
		node : Node;		
		/** The uuid for editor */
		uuid : string;		
		/** indicates whether this component is enabled or not. */
		enabled : boolean;		
		/** indicates whether this component is enabled and its node is also active in the hierarchy. */
		enabledInHierarchy : boolean;		
		_isOnLoadCalled : boolean;		
		/** Update is called every frame, if the Component is enabled. 
		*/
		update() : void;		
		/** LateUpdate is called every frame, if the Component is enabled. 
		*/
		lateUpdate() : void;		
		/** When attaching to an active node or its node first activated 
		*/
		onLoad() : void;		
		/** Called before all scripts' update if the Component is enabled 
		*/
		start() : void;		
		/** Called when this component becomes enabled and its node becomes active 
		*/
		onEnable() : void;		
		/** Called when this component becomes disabled or its node becomes inactive 
		*/
		onDisable() : void;		
		/** Called when this component will be destroyed. 
		*/
		onDestroy() : void;		
		onFocusInEditor() : void;		
		onLostFocusInEditor() : void;		
		/** Adds a component class to the node. You can also add component to node by passing in the name of the
		script.
		@param typeOrTypename the constructor or the class name of the component to add 
		*/
		addComponent(typeOrTypename : Function|string) : Component;		
		/** Returns the component of supplied type if the node has one attached, null if it doesn't. You can also get
		component in the node by passing in the name of the script. 
		*/
		getComponent(typeOrClassName : Function|string) : Component;		
		/** Returns all components of supplied Type in the node. 
		*/
		getComponents(typeOrClassName : Function|string) : Component[];		
		/** Returns the component of supplied type in any of its children using depth first search. 
		*/
		getComponentInChildren(typeOrClassName : Function|string) : Component;		
		/** Returns the components of supplied type in any of its children using depth first search. 
		*/
		getComponentsInChildren(typeOrClassName : Function|string) : Component[];		
		/** If the component's bounding box is different from the node's, you can implement this method to supply
		a custom axis aligned bounding box (AABB), so the editor's scene view can perform hit test properly.
		@param out_rect the Rect to receive the bounding box 
		*/
		_getLocalBounds(out_rect : Rect) : void;		
		/** onRestore is called after the user clicks the Reset item in the Inspector's context menu or performs
		an undo operation on this component.
		
		If the component contains the "internal state", short for "temporary member variables which not included
		in its CCClass properties", then you may need to implement this function.
		
		The editor will call the getset accessors of your component to record/restore the component's state
		for undo/redo operation. However, in extreme cases, it may not works well. Then you should implement
		this function to manually synchronize your component's "internal states" with its public properties.
		Once you implement this function, all the getset accessors of your component will not be called when
		the user performs an undo/redo operation. Which means that only the properties with default value
		will be recorded or restored by editor.
		
		Similarly, the editor may failed to reset your component correctly in extreme cases. Then if you need
		to support the reset menu, you should manually synchronize your component's "internal states" with its
		properties in this function. Once you implement this function, all the getset accessors of your component
		will not be called during reset operation. Which means that only the properties with default value
		will be reset by editor.
		
		This function is only called in editor mode. 
		*/
		onRestore() : void;		
		/** <p>Schedules a custom selector.         <br/>
		If the selector is already scheduled, then the interval parameter will be updated without scheduling it again.</p>
		@param callback The callback function
		@param interval Tick interval in seconds. 0 means tick every frame. If interval = 0, it's recommended to use scheduleUpdate() instead.
		@param repeat The selector will be executed (repeat + 1) times, you can use kCCRepeatForever for tick infinitely.
		@param delay The amount of time that the first tick will wait before execution. 
		*/
		schedule(callback : Function, interval? : number, repeat? : number, delay? : number) : void;		
		/** Schedules a callback function that runs only once, with a delay of 0 or larger
		@param callback A function wrapped as a selector
		@param delay The amount of time that the first tick will wait before execution. 
		*/
		scheduleOnce(callback : Function, delay? : number) : void;		
		/** Unschedules a custom callback function.
		@param callback_fn A function wrapped as a selector 
		*/
		unschedule(callback_fn : Function) : void;		
		/** <p>unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
		Actions are not affected by this method.</p> 
		*/
		unscheduleAllCallbacks() : void;	
	}		
		/** cc.EditBox is a component for inputing text, you can use it to gather small amounts of text from users. */
		export class EditBox extends _RendererUnderSG {		
		/** Input string of EditBox. */
		string : string;		
		/** The background image of EditBox. */
		backGroundImage : cc.SpriteFrame;		
		/** The return key type of EditBox.
		Note: it is meaningless for web platforms and desktop platforms. */
		returnType : EditBox.KeyboardReturnType;		
		/** Set the input flags that are to be applied to the EditBox. */
		inputFlag : EditBox.InputFlag;		
		/** Set the input mode of the edit box.
		If you pass ANY, it will create a multiline EditBox. */
		inputMode : EditBox.InputMode;		
		/** Font size of the input text. */
		fontSize : number;		
		/** Change the lineHeight of displayed text. */
		lineHeight : number;		
		/** Font color of the input text. */
		fontColor : cc.Color;		
		/** The display text of placeholder. */
		placeholder : string;		
		/** The font size of placeholder. */
		placeholderFontSize : number;		
		/** The font color of placeholder. */
		placeholderFontColor : cc.Color;		
		/** The maximize input length of EditBox. */
		maxLength : number;		
		/** The event handler to be called when EditBox began to edit text. */
		editingDidBegin : cc.Component.EventHandler;		
		/** The event handler to be called when EditBox text changes. */
		textChanged : cc.Component.EventHandler;		
		/** The event handler to be called when EditBox edit ends. */
		editingDidEnded : cc.Component.EventHandler;	
	}		
		/** !#en The Label Component.
		!#zh 文字标签组件 */
		export class Label extends _RendererUnderSG {		
		/** !#en Content string of label.
		!#zh 标签显示的文本内容。 */
		string : string;		
		/** !#en Horizontal Alignment of label.
		!#zh 文本内容的水平对齐方式。 */
		horizontalAlign : Label.TextAlignment;		
		/** !#en Vertical Alignment of label.
		!#zh 文本内容的垂直对齐方式。 */
		verticalAlign : Label.VerticalTextAlignment;		
		/** !#en Font size of label.
		!#zh 文本字体大小。 */
		fontSize : number;		
		/** !#en Line Height of label.
		!#zh 文本行高。 */
		lineHeight : number;		
		/** !#en Overflow of label.
		!#zh 文字显示超出范围时的处理方式。 */
		overFlow : Label.Overflow;		
		/** !#en Whether auto wrap label when string width is large than label width.
		!#zh 是否自动换行。 */
		enableWrapText : boolean;		
		/** !#en The font URL of label.
		!#zh 文本字体的 url。 */
		file : string;		
		/** !#en Whether use system font name or not.
		!#zh 是否使用系统字体。 */
		isSystemFontUsed : boolean;	
	}		
		/** The Layout is a container component, use it to arrange child elements easily. */
		export class Layout extends Component {		
		/** The layout type. */
		type : Layout.Type;		
		/** The are three resize modes for Layout.
		None, resize Container and resize children. */
		resizeMode : Layout.ResizeMode;		
		/** The cell size for grid layout. */
		cellSize : cc.Size;		
		/** The start axis for grid layout. If you choose horizontal, then children will layout horizontally at first,
		and then break line on demand. Choose vertical if you want to layout vertically at first . */
		startAxis : Layout.AxisDirection;		
		/** The padding of layout, it only effect the layout in one direction. */
		padding : number;		
		/** The distance in x-axis between each element in layout. */
		spacingX : number;		
		/** The distance in y-axis between each element in layout. */
		spacingY : number;		
		/** Only take effect in Vertical layout mode.
		This option changes the start element's positioning. */
		verticalDirection : Layout.VerticalDirection;		
		/** Only take effect in Horizontal layout mode.
		This option changes the start element's positioning. */
		horizontalDirection : Layout.HorizontalDirection;	
	}		
		/** undefined */
		export class Mask extends _RendererInSG {	
	}		
		/** Visual indicator of progress in some operation. Displays a bar to the user representing how far the operation has progressed */
		export class ProgressBar extends Component {		
		/** The targeted Sprite which will be changed progressively. */
		barSprite : cc.Sprite;		
		/** The progress mode, there are two modes supported now: horizontal and vertical. */
		mode : ProgressBar.Mode;		
		/** The total width or height of the bar sprite. */
		totalLength : number;		
		/** The current progress of the bar sprite. The valid value is between 0-1. */
		progress : number;		
		/** Whether reverse the progress direction of the bar sprite. */
		reverse : boolean;	
	}		
		/** Rendering component in scene graph.
		Maintains a node which will be the scene graph of component's Node. */
		export class _RendererInSG extends _SGComponent {	
	}		
		/** The base rendering component which will attach a leaf node to the cocos2d scene graph. */
		export class _RendererUnderSG extends _SGComponent {	
	}		
		/** The base class for all rendering component in scene graph.
		
		You should override:
		- _createSgNode
		- _initSgNode */
		export class _SGComponent extends Component {	
	}		
		/** The Scrollbar control allows the user to scroll an image or other view that is too large to see completely */
		export class Scrollbar extends Component {		
		/** The "handle" part of the scrollbar. */
		handle : cc.Sprite;		
		/** The direction of scrollbar. */
		direction : Scrollbar.Direction;		
		/** Whehter enable auto hide or not. */
		enableAutoHide : boolean;		
		/** The time to hide scrollbar when scroll finished.
		Note: This value is only useful when enableAutoHide is true. */
		autoHideTime : number;	
	}		
		/** Layout container for a view hierarchy that can be scrolled by the user,
		allowing it to be larger than the physical display. */
		export class ScrollView extends Component {		
		/** This is a reference to the UI element to be scrolled. */
		content : cc.Node;		
		/** Enable horizontal scroll. */
		horizontal : boolean;		
		/** Enable vertical scroll. */
		vertical : boolean;		
		/** When inertia is set, the content will continue to move when touch ended. */
		inertia : boolean;		
		/** It determines how quickly the content stop moving. A value of 1 will stop the movement immediately.
		A value of 0 will never stop the movement until it reaches to the boundary of scrollview. */
		brake : number;		
		/** When elastic is set, the content will be bounce back when move out of boundary. */
		elastic : boolean;		
		/** The elapse time of bouncing back. A value of 0 will bounce back immediately. */
		bounceDuration : number;		
		/** The horizontal scrollbar reference. */
		horizontalScrollBar : cc.Scrollbar;		
		/** The vertical scrollbar reference. */
		verticalScrollBar : cc.Scrollbar;		
		/** Scroll the content to the bottom boundary of ScrollView.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the bottom boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToBottom(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the top boundary of ScrollView.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the top boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToTop(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the left boundary of ScrollView.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the left boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the right boundary of ScrollView.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the right boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the top left boundary of ScrollView.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the top left boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToTopLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the top right boundary of ScrollView.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the top right boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToTopRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the bottom left boundary of ScrollView.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the bottom left boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToBottomLeft(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the bottom right boundary of ScrollView.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the bottom right boundary immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToBottomRight(timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the horizontal percent position  of ScrollView.
		@param percent A value between 0 and 1.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the horizontal percent position of ScrollView immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToPercentHorizontal(percent : number, timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the percent position of ScrollView in any direction.
		@param anchor A point which will be clamp between cc.p(0,0) and cc.p(1,1).
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the percent position of ScrollView immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollTo(anchor : Vec2, timeInSecond? : number, attenuated? : boolean) : void;		
		/** Scroll the content to the vertical percent position of ScrollView.
		@param percent A value between 0 and 1.
		@param timeInSecond Scroll time in second, if you don't pass timeInSecond,
		the content will jump to the vertical percent position of ScrollView immediately.
		@param attenuated Whether the scroll acceleration attenuated, default is true. 
		*/
		scrollToPercentVertical(percent : number, timeInSecond? : number, attenuated? : boolean) : void;		
		/** Modify the content position.
		@param position The position in content's parent space. 
		*/
		setContentPosition(position : Vec2) : void;		
		/** Query the content's position in its parent space. 
		*/
		getContentPosition() : Position;	
	}		
		/** !#en Renders a sprite in the scene.
		!#zh 该组件用于在场景中渲染精灵。 */
		export class Sprite extends _RendererUnderSG {		
		/** !#en The sprite frame of the sprite.
		!#zh 精灵的精灵帧 */
		spriteFrame : SpriteFrame;		
		/** !#en The sprite render type.
		!#zh 精灵渲染类型 */
		type : {Sprite.SpriteType};		
		/** !#en
		The fill type, This will only have any effect if the "type" is set to “cc.Sprite.Type.FILLED”.
		!#zh
		精灵填充类型，仅渲染类型设置为 cc.Sprite.SpriteType.FILLED 时有效。 */
		fillType : {Sprite.FillType};		
		/** !#en
		The fill Center, This will only have any effect if the "type" is set to “cc.Sprite.Type.FILLED”.
		!#zh
		填充中心点，仅渲染类型设置为 cc.Sprite.SpriteType.FILLED 时有效。 */
		fillCenter : Vec2;		
		/** !#en
		The fill Start, This will only have any effect if the "type" is set to “cc.Sprite.Type.FILLED”.
		!#zh
		填充起始点，仅渲染类型设置为 cc.Sprite.SpriteType.FILLED 时有效。 */
		fillStart : number;		
		/** !#en
		The fill Range, This will only have any effect if the "type" is set to “cc.Sprite.Type.FILLED”.
		!#zh
		填充范围，仅渲染类型设置为 cc.Sprite.SpriteType.FILLED 时有效。 */
		fillRange : number;		
		/** !#en specify the frame is trimmed or not.
		!#zh 是否使用裁剪模式 */
		trim : boolean;		
		/** !#en specify the source Blend Factor.
		!#zh 指定原图的混合模式 */
		srcBlendFactor : BlendFactor;		
		/** !#en specify the destination Blend Factor.
		!#zh 指定目标的混合模式 */
		dstBlendFactor : BlendFactor;		
		/** !#en specify the size tracing mode.
		!#zh 精灵尺寸调整模式 */
		sizeMode : {Sprite.SizeMode};		
		/** !#en Sets whether the sprite is visible or not.
		!#zh 设置精灵是否可见
		
		@example 
		```js
		sprite.setVisible(false);
		``` 
		*/
		setVisible(visible : boolean) : void;		
		/** !#en Query the sprite's original size.
		!#zh 获取精灵原始大小
		
		@example 
		```js
		var originalSize = sprite.getOriginalSize();
		cc.log("Original Size:" + originalSize);
		``` 
		*/
		getOriginalSize() : Size;		
		/** !#en Change the left sprite's cap inset.
		!#zh 设置精灵左边框-用于九宫格。
		@param insetLeft The values to use for the cap inset.
		
		@example 
		```js
		sprite.setInsetLeft(5);
		``` 
		*/
		setInsetLeft(insetLeft : number) : void;		
		/** !#en Query the left sprite's cap inset.
		!#zh 获取精灵左边框
		
		@example 
		```js
		var insetLeft = sprite.getInsetLeft();
		cc.log("Inset Left:" + insetLeft);
		``` 
		*/
		getInsetLeft() : number;		
		/** !#en Change the top sprite's cap inset.
		!#zh 设置精灵上边框-用于九宫格。
		@param insetTop The values to use for the cap inset.
		
		@example 
		```js
		sprite.setInsetTop(5);
		``` 
		*/
		setInsetTop(insetTop : number) : void;		
		/** !#en Query the top sprite's cap inset.
		!#zh 获取精灵上边框。
		
		@example 
		```js
		var insetTop = sprite.getInsetTop();
		cc.log("Inset Top:" + insetTop);
		``` 
		*/
		getInsetTop() : number;		
		/** !#en Change the right sprite's cap inset.
		!#zh 设置精灵右边框-用于九宫格。
		@param insetRight The values to use for the cap inset.
		
		@example 
		```js
		sprite.setInsetRight(5);
		``` 
		*/
		setInsetRight(insetRight : number) : void;		
		/** !#en Query the right sprite's cap inset.
		!#zh 获取精灵右边框。
		
		@example 
		```js
		var insetRight = sprite.getInsetRight();
		cc.log("Inset Right:" + insetRight);
		``` 
		*/
		getInsetRight() : number;		
		/** !#en Change the bottom sprite's cap inset.
		!#zh 设置精灵下边框-用于九宫格。
		@param bottomInset The values to use for the cap inset.
		
		@example 
		```js
		sprite.setInsetBottom(5);
		``` 
		*/
		setInsetBottom(bottomInset : number) : void;		
		/** !#en Query the bottom sprite's cap inset.
		!#zh 获取精灵下边框。
		
		@example 
		```js
		var insetBottom = sprite.getInsetBottom();
		cc.log("Inset Bottom:" + insetBottom);
		``` 
		*/
		getInsetBottom() : number;	
	}		
		/** !#en
		Stores and manipulate the anchoring based on its parent.
		Widget are used for GUI but can also be used for other things.
		!#zh
		Widget 组件，用于设置和适配其相对于父节点的边距，Widget 通常被用于 UI 界面，也可以用于其他地方。 */
		export class Widget extends Component {		
		/** !#en Whether to align the top.
		!#zh 是否对齐上边。 */
		isAlignTop : boolean;		
		/** !#en
		Vertically aligns the midpoint, This will open the other vertical alignment options cancel.
		!#zh
		是否垂直方向对齐中点，开启此项会将垂直方向其他对齐选项取消。 */
		isAlignVerticalCenter : boolean;		
		/** !#en Whether to align the bottom.
		!#zh 是否对齐下边。 */
		isAlignBottom : boolean;		
		/** !#en Whether to align the left.
		!#zh 是否对齐左边 */
		isAlignLeft : boolean;		
		/** !#en
		Horizontal aligns the midpoint. This will open the other horizontal alignment options canceled.
		!#zh
		是否水平方向对齐中点，开启此选项会将水平方向其他对齐选项取消。 */
		isAlignHorizontalCenter : boolean;		
		/** !#en Whether to align the right.
		!#zh 是否对齐右边。 */
		isAlignRight : boolean;		
		/** !#en
		Whether the stretched horizontally, when enable the left and right alignment will be stretched horizontally,
		the width setting is invalid (read only).
		!#zh
		当前是否水平拉伸。当同时启用左右对齐时，节点将会被水平拉伸，此时节点的宽度只读。 */
		isStretchWidth : boolean;		
		/** !#en
		Whether the stretched vertically, when enable the left and right alignment will be stretched vertically,
		then height setting is invalid (read only)
		!#zh
		当前是否垂直拉伸。当同时启用上下对齐时，节点将会被垂直拉伸，此时节点的高度只读。 */
		isStretchHeight : boolean;		
		/** !#en
		The margins between the top of this node and the top of parent node,
		the value can be negative, Only available in 'isAlignTop' open.
		!#zh
		本节点顶边和父节点顶边的距离，可填写负值，只有在 isAlignTop 开启时才有作用。 */
		top : number;		
		/** !#en
		The margins between the bottom of this node and the bottom of parent node,
		the value can be negative, Only available in 'isAlignBottom' open.
		!#zh
		本节点底边和父节点底边的距离，可填写负值，只有在 isAlignBottom 开启时才有作用。 */
		bottom : number;		
		/** !#en
		The margins between the left of this node and the left of parent node,
		the value can be negative, Only available in 'isAlignLeft' open.
		!#zh
		本节点左边和父节点左边的距离，可填写负值，只有在 isAlignLeft 开启时才有作用。 */
		left : number;		
		/** !#en
		The margins between the right of this node and the right of parent node,
		the value can be negative, Only available in 'isAlignRight' open.
		!#zh
		本节点右边和父节点右边的距离，可填写负值，只有在 isAlignRight 开启时才有作用。 */
		right : number;		
		/** !#en
		If true, top is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.
		!#zh
		如果为 true，"top" 将会以像素作为边距，否则将会以相对父物体高度的百分比（0 到 1）作为边距。 */
		isAbsoluteTop : boolean;		
		/** !#en
		If true, bottom is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's height.
		!#zh
		如果为 true，"bottom" 将会以像素作为边距，否则将会以相对父物体高度的百分比（0 到 1）作为边距。 */
		isAbsoluteBottom : boolean;		
		/** !#en
		If true, left is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.
		!#zh
		如果为 true，"left" 将会以像素作为边距，否则将会以相对父物体宽度的百分比（0 到 1）作为边距。 */
		isAbsoluteLeft : boolean;		
		/** !#en
		If true, right is pixel margin, otherwise is percentage (0 - 1) margin relative to the parent's width.
		!#zh
		如果为 true，"right" 将会以像素作为边距，否则将会以相对父物体宽度的百分比（0 到 1）作为边距。 */
		isAbsoluteRight : boolean;	
	}		
		/** <p>
		    The base class of event listener.                                                                        <br/>
		    If you need custom listener which with different callback, you need to inherit this class.               <br/>
		    For instance, you could refer to EventListenerAcceleration, EventListenerKeyboard,                       <br/>
		     EventListenerTouchOneByOne, EventListenerCustom.
		</p> */
		export class EventListener {		
		/** <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
		and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
		This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
		You will need to retain an object if you created a listener and haven't added it any target node during the same frame.<br/>
		Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
		when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
		The retain function can increase a reference count for the native object to avoid it being released,<br/>
		you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
		retain and release function call should be paired in developer's game code.</p> 
		*/
		retain() : void;		
		/** <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
		and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
		This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
		You will need to retain an object if you created a listener and haven't added it any target node during the same frame.<br/>
		Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
		when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
		The retain function can increase a reference count for the native object to avoid it being released,<br/>
		you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
		retain and release function call should be paired in developer's game code.</p> 
		*/
		release() : void;		
		/** Create a EventListener object by json object
		@param argObj a json object
		
		@example 
		```js
		--------
		cc.EventListener.create({
		
		      event: cc.EventListener.TOUCH_ONE_BY_ONE,
		      swallowTouches: true,
		      onTouchBegan: function (touch, event) {
		          //do something
		          return true;
		      }
		   });
		
		``` 
		*/
		create(argObj : any) : EventListener;	
	}		
		/** <p>
		 cc.eventManager is a singleton object which manages event listener subscriptions and event dispatching. <br/>
		                                                                                                             <br/>
		 The EventListener list is managed in such way so that event listeners can be added and removed          <br/>
		 while events are being dispatched.
		</p> */
		export class eventManager {		
		/** Pauses all listeners which are associated the specified target. 
		*/
		pauseTarget(node : Node, recursive? : boolean) : void;		
		/** Resumes all listeners which are associated the specified target. 
		*/
		resumeTarget(node : Node, recursive? : boolean) : void;		
		/** <p>
		Adds a event listener for a specified event.                                                                                                            <br/>
		if the parameter "nodeOrPriority" is a node, it means to add a event listener for a specified event with the priority of scene graph.                   <br/>
		if the parameter "nodeOrPriority" is a Number, it means to add a event listener for a specified event with the fixed priority.                          <br/>
		</p>
		@param listener The listener of a specified event or a object of some event parameters.
		@param nodeOrPriority The priority of the listener is based on the draw order of this node or fixedPriority The fixed priority of the listener. 
		*/
		addListener(listener : EventListener|any, nodeOrPriority : Node|number) : EventListener;		
		/** Adds a Custom event listener. It will use a fixed priority of 1. 
		*/
		addCustomListener(eventName : string, callback : Function) : EventListener;		
		/** Remove a listener.
		@param listener an event listener or a registered node target 
		*/
		removeListener(listener : EventListener) : void;		
		/** Removes all listeners with the same event listener type or removes all listeners of a node
		@param listenerType listenerType or a node 
		*/
		removeListeners(listenerType : number|Node, recursive? : boolean) : void;		
		/** Removes all custom listeners with the same event name 
		*/
		removeCustomListeners(customEventName : string) : void;		
		/** Removes all listeners 
		*/
		removeAllListeners() : void;		
		/** Sets listener's priority with fixed value. 
		*/
		setPriority(listener : EventListener, fixedPriority : number) : void;		
		/** Whether to enable dispatching events 
		*/
		setEnabled(enabled : boolean) : void;		
		/** Checks whether dispatching events is enabled 
		*/
		isEnabled() : boolean;		
		/** Dispatches the event, also removes all EventListeners marked for deletion from the event dispatcher list. 
		*/
		dispatchEvent(event : Event) : void;		
		/** Dispatches a Custom Event with a event name an optional user data 
		*/
		dispatchCustomEvent(eventName : string, optionalUserData : any) : void;	
	}		
		/** The touch event class */
		export class Touch {		
		/** Returns the current touch location in OpenGL coordinates. 
		*/
		getLocation() : Vec2;		
		/** Returns X axis location value. 
		*/
		getLocationX() : number;		
		/** Returns Y axis location value. 
		*/
		getLocationY() : number;		
		/** Returns the previous touch location in OpenGL coordinates. 
		*/
		getPreviousLocation() : Vec2;		
		/** Returns the start touch location in OpenGL coordinates. 
		*/
		getStartLocation() : Vec2;		
		/** Returns the delta distance from the previous touche to the current one in screen coordinates. 
		*/
		getDelta() : Vec2;		
		/** Returns the current touch location in screen coordinates. 
		*/
		getLocationInView() : Vec2;		
		/** Returns the previous touch location in screen coordinates. 
		*/
		getPreviousLocationInView() : Vec2;		
		/** Returns the start touch location in screen coordinates. 
		*/
		getStartLocationInView() : Vec2;		
		/** Returns the id of cc.Touch. 
		*/
		getID() : number;		
		/** Sets information to touch. 
		*/
		setTouchInfo(id : number, x : number, y : number) : void;	
	}		
		/** Loader for resource loading process. It's a singleton object. */
		export class loader extends Pipeline {		
		/** The downloader in cc.loader's pipeline, it's by default the first pipe.
		It's used to download files with several handlers: pure text, image, script, audio, font, uuid.
		You can add your own download function with addDownloadHandlers */
		downloader : any;		
		/** The downloader in cc.loader's pipeline, it's by default the second pipe.
		It's used to parse downloaded content with several handlers: JSON, image, plist, fnt, uuid.
		You can add your own download function with addLoadHandlers */
		loader : any;		
		/** Add custom supported types handler or modify existing type handler for download process.
		@param extMap Custom supported types with corresponded handler
		
		@example 
		```js
		cc.loader.addDownloadHandlers({
		     // This will match all url with `.scene` extension or all url with `scene` type
		     'scene' : function (url, callback) {}
		 });
		``` 
		*/
		addDownloadHandlers(extMap : any) : void;		
		/** Add custom supported types handler or modify existing type handler for load process.
		@param extMap Custom supported types with corresponded handler
		
		@example 
		```js
		cc.loader.addLoadHandlers({
		     // This will match all url with `.scene` extension or all url with `scene` type
		     'scene' : function (url, callback) {}
		 });
		``` 
		*/
		addLoadHandlers(extMap : any) : void;		
		/** Load resources with a progression callback and a complete callback.
		The progression callback is the same as Pipeline's {{#crossLink "Pipeline/onProgress:method"}}onProgress{{/crossLink}}
		The complete callback is almost the same as Pipeline's {{#crossLink "Pipeline/onComplete:method"}}onComplete{{/crossLink}}
		The only difference is when user pass a single url as resources, the complete callback will set its result directly as the second parameter.
		@param resources Url list in an array.
		     If url starts with "resources://", will load from "resources" folder in your assets.
		@param progressCallback Callback invoked when progression change
		@param completeCallback Callback invoked when all resources loaded
		
		@example 
		```js
		cc.loader.load('a.png', function (err, tex) {
		     cc.log('Result should be a texture: ' + (tex instanceof cc.Texture2D));
		 });
		
		 // load a.png from resources folder with no extension.
		 cc.loader.load('resources://a', function (err, tex) {
		     cc.log('Result should be a texture: ' + (tex instanceof cc.Texture2D));
		 });
		
		 cc.loader.load(['a.png', 'b.json'], function (errors, results) {
		     if (errors) {
		         for (var i = 0; i < errors.length; i++) {
		             cc.log('Error url [' + errors[i] + ']: ' + results.getError(errors[i]));
		         }
		     }
		     var aTex = results.getContent('a.png');
		     var bJsonObj = results.getContent('b.json');
		 });
		``` 
		*/
		load(resources : string|any[], progressCallback : [Function], completeCallback : Function) : void;		
		/** Get resource data by id.
		When you load resources with cc.loader, the url or id passed will be the unique identity of the resource.
		After loaded, you can acquire them by passing the url or original id to this API. 
		*/
		getRes(url : string) : any;		
		/** Release the cache of resource by url. 
		*/
		release(url : string) : void;		
		/** Resource cache of all resources. 
		*/
		releaseAll() : void;	
	}		
		/** AssetTable is used to find asset's uuid by url */
		export class AssetTable {		
		constructor();		
		/** Returns all asset paths in the table. 
		*/
		getAllPaths() : string[];	
	}		
		/** LoadingItems is the manager of items in pipeline.
		It hold a map of items, each entry in the map is a url to object key value pair.
		Each item always contains the following property:
		- src: The url
		- type: The type, it's the extension name of the url by default, could be specified manually too
		- error: The error happened in pipeline will be stored in this property
		- content: The content processed by the pipeline, the final result will also be stored in this property
		- complete: The flag indicate whether the item is completed by the pipeline
		- states: An object stores the states of each pipe the item go through, the state can be: Pipeline.ItemState.WORKING | Pipeline.ItemState.ERROR | Pipeline.ItemState.COMPLETE
		
		Item can hold other custom properties */
		export class LoadingItems extends CallbacksInvoker {		
		/** The map of all items */
		map : any;		
		/** The map of completed items */
		completed : any;		
		/** Total count of all items */
		totalCount : number;		
		/** Total count of completed items */
		completedCount : number;		
		/** Add a listener for an item, the callback will be invoked when the item is completed.
		@param callback can be null
		@param target can be null 
		*/
		addListener(key : string, callback : Function, target : any) : boolean;		
		/** Check if the specified key has any registered callback.
		If a callback is also specified, it will only return true if the callback is registered. 
		*/
		hasListener(key : string, callback? : Function, target? : any) : boolean;		
		/** Removes a listener.
		It will only remove when key, callback, target all match correctly. 
		*/
		remove(key : string, callback : Function, target : any) : boolean;		
		/** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
		@param key The event key to be removed or the target to be removed 
		*/
		removeAllListeners(key : string|any) : void;	
	}		
		/** A pipeline describes a sequence of manipulations, each manipulation is called a pipe.
		It's designed for loading process, so items should be urls, and the url will be the identity of each item during the process.
		A list of items can flow in the pipeline and it will output the results of all pipes.
		They flow in the pipeline like water in tubes, they go through pipe by pipe separately.
		Finally all items will flow out the pipeline and the process is finished. */
		export class Pipeline {		
		/** Constructor, pass an array of pipes to construct a new Pipeline, the pipes will be chained in the given order.
		A pipe is an object which must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
		It can also include `async` property to identify whether it's an asynchronous process.
		
		@example 
		```js
		var pipeline = new Pipeline([
		     {
		         id: 'Downloader',
		         handle: function (item, callback) {},
		         async: true
		     },
		     {id: 'Parser', handle: function (item) {}, async: false}
		 ]);
		``` 
		*/
		Pipeline(pipes : any[]) : void;		
		/** Insert a new pipe at the given index of the pipeline.
		A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
		@param pipe The pipe to be inserted
		@param index The index to insert 
		*/
		insertPipe(pipe : any, index : number) : void;		
		/** Add a new pipe at the end of the pipeline.
		A pipe must contain an `id` in string and a `handle` function, the id must be unique in the pipeline.
		@param pipe The pipe to be appended 
		*/
		appendPipe(pipe : any) : void;		
		/** Let new items flow into the pipeline.
		Each item can be a simple url string or an object,
		if it's an object, it must contain `id` property.
		You can specify its type by `type` property, by default, the type is the extension name in `src`.
		By adding a `skips` property including pipe ids, you can skip these pipe.
		The object can contain any supplementary property as you want.
		
		@example 
		```js
		pipeline.flowIn([
		     'res/Background.png',
		     {
		         id: 'res/scene.json',
		         type: 'scene',
		         name: 'scene',
		         skips: ['Downloader']
		     }
		 ]);
		``` 
		*/
		flowIn(urlList : any[]) : any[];		
		/** Let new items flow into the pipeline and give a callback when the list of items are all completed.
		This is for loading dependencies for an existing item in flow, usually used in a pipe logic.
		For example, we have a loader for scene configuration file in JSON, the scene will only be fully loaded
		after all its dependencies are loaded, then you will need to use function to flow in all dependencies
		found in the configuration file, and finish the loader pipe only after all dependencies are loaded (in the callback). 
		*/
		flowInDeps(urlList : any[], callback : Function) : any[];		
		/** Copy the item states from one source item to all destination items.
		It's quite useful when a pipe generate new items from one source item,
		then you should flowIn these generated items into pipeline,
		but you probably want them to skip all pipes the source item already go through,
		you can achieve it with this API.
		
		For example, an unzip pipe will generate more items, but you won't want them to pass unzip or download pipe again.
		@param srcItem The source item
		@param dstItems A single destination item or an array of destination items 
		*/
		copyItemStates(srcItem : any, dstItems : any[]|any) : void;		
		/** Returns whether the pipeline is flowing (contains item) currently. 
		*/
		isFlowing() : boolean;		
		/** Returns all items in pipeline. 
		*/
		getItems() : LoadingItems;		
		/** Removes an item in pipeline, no matter it's in progress or completed. 
		*/
		removeItem() : boolean;		
		/** Clear the current pipeline, this function will clean up the items. 
		*/
		clear() : void;		
		/** This is a callback which will be invoked while an item flow out the pipeline, you should overwrite this function.
		@param completedCount The number of the items that are already completed.
		@param totalCount The total number of the items.
		@param item The latest item which flow out the pipeline.
		
		@example 
		```js
		pipeline.onProgress = function (completedCount, totalCount, item) {
		     var progress = (100 * completedCount / totalCount).toFixed(2);
		     cc.log(progress + '%');
		 }
		``` 
		*/
		onProgress(completedCount : number, totalCount : number, item : any) : void;		
		/** This is a callback which will be invoked while all items flow out the pipeline, you should overwirte this function.
		@param error All errored urls will be stored in this array, if no error happened, then it will be null
		@param items All items.
		
		@example 
		```js
		pipeline.onComplete = function (error, items) {
		     if (error)
		         cc.log('Completed with ' + error.length + ' errors');
		     else
		         cc.log('Completed ' + items.totalCount + ' items');
		 }
		``` 
		*/
		onComplete(error : any[], items : LoadingItems) : void;	
	}		
		/** This API is deprecated, will be replaced by new API from {{#crossLink "Animation"}}cc.Animation{{/crossLink}}
		   cc.AnimationFrame
		   A frame of the animation. It contains information like:
		      - sprite frame name
		      - # of delay units.
		      - offset */
		export class AnimationFrame extends cc._Class {		
		/** Create a new animation frame and copy all contents into it 
		*/
		clone() : AnimationFrame;		
		/** Create a new animation frame and copy all contents into it 
		*/
		copyWithZone() : AnimationFrame;		
		/** Create a new animation frame and copy all contents into it 
		*/
		copy() : AnimationFrame;		
		/** initializes the animation frame with a spriteframe, number of delay units and a notification user info 
		*/
		initWithSpriteFrame(spriteFrame : cc.SpriteFrame, delayUnits : number, userInfo : any) : void;		
		/** Returns sprite frame to be used 
		*/
		getSpriteFrame() : cc.SpriteFrame;		
		/** Sets sprite frame to be used 
		*/
		setSpriteFrame(spriteFrame : cc.SpriteFrame) : void;		
		/** Returns how many units of time the frame takes getter 
		*/
		getDelayUnits() : number;		
		/** Sets how many units of time the frame takes setter 
		*/
		setDelayUnits(delayUnits : void) : void;		
		/** Returns the user custom information 
		*/
		getUserInfo() : any;		
		/** Sets the user custom information 
		*/
		setUserInfo(userInfo : any) : void;		
		/** Creates an animation frame. 
		*/
		create(spriteFrame : cc.SpriteFrame, delayUnits : number, userInfo : any) : void;	
	}		
		/** This API is deprecated, will be replaced by new API from {{#crossLink "Animation"}}cc.Animation{{/crossLink}}
		<p>
		    A cc.SpriteFrameAnimation object is used to perform animations on the _ccsg.Sprite objects.<br/>
		    <br/>
		     The cc.SpriteFrameAnimation object contains cc.SpriteFrame objects, and a possible delay between the frames. <br/>
		     You can animate a cc.SpriteFrameAnimation object by using the cc.Animate action.
		</p> */
		export class SpriteFrameAnimation extends cc._Class {		
		/** Returns the array of animation frames 
		*/
		getFrames() : any[];		
		/** Sets array of animation frames 
		*/
		setFrames(frames : any[]) : void;		
		/** Adds a frame to a cc.SpriteFrameAnimation, the frame will be added with one "delay unit". 
		*/
		addSpriteFrame(frame : cc.SpriteFrame) : void;		
		/** Adds a frame with an image filename. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit". 
		*/
		addSpriteFrameWithFile(fileName : string) : void;		
		/** Adds a frame with a texture and a rect. Internally it will create a cc.SpriteFrame and it will add it. The frame will be added with one "delay unit". 
		*/
		addSpriteFrameWithTexture(texture : cc.Texture2D, rect : cc.Rect) : void;		
		/** Initializes a cc.SpriteFrameAnimation with cc.AnimationFrame, do not call this method yourself, please pass parameters to constructor to initialize. 
		*/
		initWithAnimationFrames(arrayOfAnimationFrames : any[], delayPerUnit : number, loops? : number) : void;		
		/** Clone the current animation 
		*/
		clone() : cc.SpriteFrameAnimation;		
		/** Clone the current animation 
		*/
		copyWithZone() : cc.SpriteFrameAnimation;		
		/** Clone the current animation 
		*/
		copy(pZone : void) : cc.SpriteFrameAnimation;		
		/** Returns how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ... 
		*/
		getLoops() : number;		
		/** Sets how many times the animation is going to loop. 0 means animation is not animated. 1, animation is executed one time, ... 
		*/
		setLoops(value : number) : void;		
		/** Sets whether or not it shall restore the original frame when the animation finishes 
		*/
		setRestoreOriginalFrame(restOrigFrame : boolean) : void;		
		/** Returns whether or not it shall restore the original frame when the animation finishes 
		*/
		getRestoreOriginalFrame() : boolean;		
		/** Returns duration in seconds of the whole animation. It is the result of totalDelayUnits * delayPerUnit 
		*/
		getDuration() : number;		
		/** Returns delay in seconds of the "delay unit" 
		*/
		getDelayPerUnit() : number;		
		/** Sets delay in seconds of the "delay unit" 
		*/
		setDelayPerUnit(delayPerUnit : number) : void;		
		/** Returns total delay units of the cc.SpriteFrameAnimation. 
		*/
		getTotalDelayUnits() : number;		
		/** Initializes a cc.SpriteFrameAnimation with frames and a delay between frames, do not call this method yourself, please pass parameters to constructor to initialize. 
		*/
		initWithSpriteFrames(frames : any[], delay : number, loops? : number) : void;		
		/** <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
		and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
		This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
		You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.<br/>
		Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
		when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
		The retain function can increase a reference count for the native object to avoid it being released,<br/>
		you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
		retain and release function call should be paired in developer's game code.</p> 
		*/
		retain() : void;		
		/** <p>Currently JavaScript Bindings (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
		and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
		This is a hack, and should be removed once JSB fixes the retain/release bug<br/>
		You will need to retain an object if you created an engine object and haven't added it into the scene graph during the same frame.<br/>
		Otherwise, JSB's native autorelease pool will consider this object a useless one and release it directly,<br/>
		when you want to use it later, a "Invalid Native Object" error will be raised.<br/>
		The retain function can increase a reference count for the native object to avoid it being released,<br/>
		you need to manually invoke release function when you think this object is no longer needed, otherwise, there will be memory learks.<br/>
		retain and release function call should be paired in developer's game code.</p> 
		*/
		release() : void;		
		/** Creates an animation. 
		*/
		create(frames : any[], delay : number, loops? : number) : cc.SpriteFrameAnimation;		
		createWithAnimationFrames() : void;	
	}		
		/** <p>
		   A cc.SpriteFrame has:<br/>
		     - texture: A cc.Texture2D that will be used by the _ccsg.Sprite<br/>
		     - rectangle: A rectangle of the texture<br/>
		   <br/>
		   You can modify the frame of a _ccsg.Sprite by doing:<br/>
		</p> */
		export class SpriteFrame extends Asset {		
		constructor();		
		/** Constructor of SpriteFrame class
		@param rect If parameters' length equal 2, rect in points, else rect in pixels
		@param rotated Whether the frame is rotated in the texture
		@param offset The offset of the frame in the texture
		@param originalSize The size of the frame in the texture
		
		@example 
		```js
		// ----------------------------------------------------
		// 1. Create a cc.SpriteFrame with image path
		var url = cc.url.raw('resources/textures/grossini_dance.png');
		var frame1 = new cc.SpriteFrame(url, cc.Rect(0, 0, 90, 128));
		
		// ----------------------------------------------------
		// 2. Create a cc.SpriteFrame with a texture, rect, rotated, offset and originalSize in pixels.
		var url = cc.url.raw('resources/textures/grossini_dance.png');
		var texture = cc.textureCache.addImage(url);
		var frame1 = new cc.SpriteFrame(texture, cc.Rect(0, 0, 90, 128));
		var frame2 = new cc.SpriteFrame(texture, cc.Rect(0, 0, 90, 128), false, 0, cc.Size(90, 128));
		
		// ----------------------------------------------------
		// 3. load a cc.SpriteFrame with image path (Recommend)
		var url = 'resources://test assets/PurpleMonster.png/PurpleMonster';
		var self = this;
		cc.loader.load(url, function (err, spriteFrame) {
		        var node = new cc.Node("New Sprite");
		        var sprite = node.addComponent(cc.Sprite);
		        sprite.spriteFrame = spriteFrame;
		        node.parent = self.node
		    }
		);
		
		``` 
		*/
		SpriteFrame(filename : string|Texture2D, rect : Rect, rotated? : boolean, offset? : Vec2, originalSize? : Size) : void;		
		/** Top border of the sprite */
		insetTop : number;		
		/** Bottom border of the sprite */
		insetBottom : number;		
		/** Left border of the sprite */
		insetLeft : number;		
		/** Right border of the sprite */
		insetRight : number;		
		/** Returns whether the texture have been loaded 
		*/
		textureLoaded() : boolean;		
		/** Add a event listener for texture loaded event. 
		*/
		addLoadedEventListener(callback : Function, target : any) : void;		
		/** Returns whether the sprite frame is rotated in the texture. 
		*/
		isRotated() : boolean;		
		/** Set whether the sprite frame is rotated in the texture. 
		*/
		setRotated(bRotated : boolean) : void;		
		/** Returns the rect of the sprite frame in the texture. 
		*/
		getRect() : Rect;		
		/** Sets the rect of the sprite frame in the texture. 
		*/
		setRect(rect : Rect) : void;		
		/** Returns the original size of the trimmed image. 
		*/
		getOriginalSize() : Size;		
		/** Sets the original size of the trimmed image. 
		*/
		setOriginalSize(size : Size) : void;		
		/** Returns the texture of the frame. 
		*/
		getTexture() : Texture2D;		
		/** Sets the texture of the frame, the texture is retained automatically. 
		*/
		_refreshTexture(texture : Texture2D) : void;		
		/** Returns the offset of the frame in the texture. 
		*/
		getOffset() : Vec2;		
		/** Sets the offset of the frame in the texture. 
		*/
		setOffset(offsets : Vec2) : void;		
		/** Clone the sprite frame. 
		*/
		clone() : SpriteFrame;		
		/** Initializes SpriteFrame with Texture, rect, rotated, offset and originalSize in pixels.<br/>
		Please pass parameters to the constructor to initialize the sprite, do not call this function yourself.
		@param rect if parameters' length equal 2, rect in points, else rect in pixels 
		*/
		initWithTexture(texture : string|Texture2D, rect : Rect, rotated? : boolean, offset? : Vec2, originalSize? : Size) : boolean;		
		/** Copy the sprite frame 
		*/
		copyWithZone() : SpriteFrame;		
		/** Copy the sprite frame 
		*/
		copy() : SpriteFrame;	
	}		
		/** <p>
		cc.spriteFrameCache is a singleton that handles the loading of the sprite frames. It saves in a cache the sprite frames.<br/>
		<br/> */
		export class spriteFrameCache {		
		/** <p>
		  Adds multiple Sprite Frames from a plist or json file.<br/>
		  A texture will be loaded automatically. The texture name will composed by replacing the .plist or .json suffix with .png<br/>
		  If you want to use another texture, you should use the addSpriteFrames:texture method.<br/>
		</p>
		@param url file path
		
		@example 
		```js
		----------------------------------------------------
		// add SpriteFrames to SpriteFrameCache With File
		cc.spriteFrameCache.addSpriteFrames(s_grossiniPlist);
		cc.spriteFrameCache.addSpriteFrames(s_grossiniJson);
		
		``` 
		*/
		addSpriteFrames(url : string, texture : HTMLImageElement|Texture2D|string) : void;		
		/** <p>
		 Adds an sprite frame with a given name.<br/>
		 If the name already exists, then the contents of the old name will be replaced with the new one.
		</p>
		@param frame Constructor of SpriteFrame class 
		*/
		addSpriteFrame(frame: (filename: string|Texture2D, rect: Rect, rotated: boolean, offset: Vec2, originalSize: Size) => void, frameName : string) : void;		
		/** <p>
		  Purges the dictionary of loaded sprite frames.<br/>
		  Call this method if you receive the "Memory Warning".<br/>
		  In the short term: it will free some resources preventing your app from being killed.<br/>
		  In the medium term: it will allocate more resources.<br/>
		  In the long term: it will be the same.<br/>
		</p> 
		*/
		removeSpriteFrames() : void;		
		/** Deletes an sprite frame from the sprite frame cache. 
		*/
		removeSpriteFrameByName(name : string) : void;		
		/** <p>
		    Removes multiple Sprite Frames from a plist file.<br/>
		    Sprite Frames stored in this file will be removed.<br/>
		    It is convinient to call this method when a specific texture needs to be removed.<br/>
		</p>
		@param url Plist filename 
		*/
		removeSpriteFramesFromFile(url : string) : void;		
		/** <p>
		   Removes all Sprite Frames associated with the specified textures.<br/>
		   It is convenient to call this method when a specific texture needs to be removed.
		</p> 
		*/
		removeSpriteFramesFromTexture(texture : HTMLImageElement|HTMLCanvasElement|Texture2D) : void;		
		/** <p>
		  Returns an Sprite Frame that was previously added.<br/>
		  If the name is not found it will return nil.<br/>
		  You should retain the returned copy if you are going to use it.<br/>
		</p>
		@param name name of SpriteFrame
		
		@example 
		```js
		----------------------------------------------------
		//get a SpriteFrame by name
		var frame = cc.spriteFrameCache.getSpriteFrame("grossini_dance_01.png");
		
		``` 
		*/
		getSpriteFrame(name : string) : SpriteFrame;	
	}		
		/** The asset library which managing loading/unloading assets in project. */
		export class AssetLibrary {		
		/**  
		*/
		queryAssetInfo(uuid : string, callback: (error: Error, url: string, raw: boolean, ctorInEditor: Function) => void) : void;		
		/** init the asset library 
		*/
		init(options : { libraryPath : string; mountPaths : any; rawAssets? : any; rawAssetsBase? : string; }) : void;	
	}		
		/** undefined */
		export class _ComponentAttributes {		
		constructor();		
		/** Automatically add required component as a dependency. */
		requireComponent : Component;		
		/** If specified to a type, prevents Component of the same type (or subtype) to be added more than once to a Node. */
		disallowMultiple : Component;		
		/** The menu path to register a component to the editors "Component" menu. Eg. "Rendering/Camera". */
		menu : string;		
		/** Makes a component execute in edit mode.
		By default, all components are only executed in play mode,
		which means they will not have their callback functions executed while the Editor is in edit mode. */
		executeInEditMode : boolean;		
		/** This property is only available if executeInEditMode is true.
		If specified, the editor's scene view will keep updating this node in 60 fps when it is selected,
		otherwise, it will update only if necessary. */
		playOnFocus : boolean;		
		/** Specifying the url of the custom html to draw the component in inspector. */
		inspector : string;		
		/** Specifying the url of the icon to display in inspector. */
		icon : string;		
		/** The custom documentation URL */
		help : string;	
	}		
		/** <p>
		 This class manages all events of input. include: touch, mouse, accelerometer, keyboard                                       <br/>
		</p> */
		export class inputManager {		
		/**  
		*/
		handleTouchesBegin(touches : any[]) : void;		
		/**  
		*/
		handleTouchesMove(touches : any[]) : void;		
		/**  
		*/
		handleTouchesEnd(touches : any[]) : void;		
		/**  
		*/
		handleTouchesCancel(touches : any[]) : void;		
		/**  
		*/
		getSetOfTouchesEndOrCancel(touches : any[]) : any[];		
		/**  
		*/
		getHTMLElementPosition(element : HTMLElement) : any;		
		/**  
		*/
		getPreTouch(touch : Touch) : Touch;		
		/**  
		*/
		setPreTouch(touch : Touch) : void;		
		/**  
		*/
		getTouchByXY(tx : number, ty : number, pos : Vec2) : Touch;		
		/**  
		*/
		getTouchByXY(location : Vec2, pos : Vec2, eventType : number) : Event.EventMouse;		
		/**  
		*/
		getPointByEvent(event : Touch, pos : Vec2) : Vec2;		
		/**  
		*/
		getTouchesByEvent(event : Touch, pos : Vec2) : any[];		
		/**  
		*/
		registerSystemEvent(element : HTMLElement) : void;		
		/**  
		*/
		update(dt : number) : void;	
	}	
	/** Key map for keyboard event */
	export enum KEY {		
		none = 0,
		back = 0,
		menu = 0,
		backspace = 0,
		tab = 0,
		enter = 0,
		shift = 0,
		ctrl = 0,
		alt = 0,
		pause = 0,
		capslock = 0,
		escape = 0,
		space = 0,
		pageup = 0,
		pagedown = 0,
		end = 0,
		home = 0,
		left = 0,
		up = 0,
		right = 0,
		down = 0,
		select = 0,
		insert = 0,
		Delete = 0,
		a = 0,
		b = 0,
		c = 0,
		d = 0,
		e = 0,
		f = 0,
		g = 0,
		h = 0,
		i = 0,
		j = 0,
		k = 0,
		l = 0,
		m = 0,
		n = 0,
		o = 0,
		p = 0,
		q = 0,
		r = 0,
		s = 0,
		t = 0,
		u = 0,
		v = 0,
		w = 0,
		x = 0,
		y = 0,
		z = 0,
		num0 = 0,
		num1 = 0,
		num2 = 0,
		num3 = 0,
		num4 = 0,
		num5 = 0,
		num6 = 0,
		num7 = 0,
		num8 = 0,
		num9 = 0,
		'*' = 0,
		'+' = 0,
		'-' = 0,
		numdel = 0,
		'/' = 0,
		f1 = 0,
		f2 = 0,
		f3 = 0,
		f4 = 0,
		f5 = 0,
		f6 = 0,
		f7 = 0,
		f8 = 0,
		f9 = 0,
		f10 = 0,
		f11 = 0,
		f12 = 0,
		numlock = 0,
		scrolllock = 0,
		';' = 0,
		semicolon = 0,
		equal = 0,
		'=' = 0,
		',' = 0,
		comma = 0,
		dash = 0,
		'.' = 0,
		period = 0,
		forwardslash = 0,
		grave = 0,
		'[' = 0,
		openbracket = 0,
		backslash = 0,
		']' = 0,
		closebracket = 0,
		quote = 0,
		dpadLeft = 0,
		dpadRight = 0,
		dpadUp = 0,
		dpadDown = 0,
		dpadCenter = 0,	
	}	
	/** Image formats */
	export enum ImageFormat {		
		JPG = 0,
		PNG = 0,
		TIFF = 0,
		WEBP = 0,
		PVR = 0,
		ETC = 0,
		S3TC = 0,
		ATITC = 0,
		TGA = 0,
		RAWDATA = 0,
		UNKNOWN = 0,
		getImageFormatByData = 0,	
	}	
	/** Predefined constants */
	export enum Macro {		
		INVALID_INDEX = 0,
		NODE_TAG_INVALID = 0,
		PI = 0,
		PI2 = 0,
		FLT_MAX = 0,
		FLT_MIN = 0,
		RAD = 0,
		DEG = 0,
		UINT_MAX = 0,
		REPEAT_FOREVER = 0,
		FLT_EPSILON = 0,
		ONE = 0,
		ZERO = 0,
		SRC_ALPHA = 0,
		SRC_ALPHA_SATURATE = 0,
		SRC_COLOR = 0,
		DST_ALPHA = 0,
		DST_COLOR = 0,
		ONE_MINUS_SRC_ALPHA = 0,
		ONE_MINUS_SRC_COLOR = 0,
		ONE_MINUS_DST_ALPHA = 0,
		ONE_MINUS_DST_COLOR = 0,
		ONE_MINUS_CONSTANT_ALPHA = 0,
		ONE_MINUS_CONSTANT_COLOR = 0,
		LINEAR = 0,
		BLEND_DST = 0,
		WEB_ORIENTATION_PORTRAIT = 0,
		WEB_ORIENTATION_LANDSCAPE_LEFT = 0,
		WEB_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 0,
		WEB_ORIENTATION_LANDSCAPE_RIGHT = 0,
		DEVICE_ORIENTATION_PORTRAIT = 0,
		DEVICE_ORIENTATION_LANDSCAPE_LEFT = 0,
		DEVICE_ORIENTATION_PORTRAIT_UPSIDE_DOWN = 0,
		DEVICE_ORIENTATION_LANDSCAPE_RIGHT = 0,
		DEVICE_MAX_ORIENTATIONS = 0,
		VERTEX_ATTRIB_FLAG_NONE = 0,
		VERTEX_ATTRIB_FLAG_POSITION = 0,
		VERTEX_ATTRIB_FLAG_COLOR = 0,
		VERTEX_ATTRIB_FLAG_TEX_COORDS = 0,
		VERTEX_ATTRIB_FLAG_POS_COLOR_TEX = 0,
		GL_ALL = 0,
		VERTEX_ATTRIB_POSITION = 0,
		VERTEX_ATTRIB_COLOR = 0,
		VERTEX_ATTRIB_TEX_COORDS = 0,
		VERTEX_ATTRIB_MAX = 0,
		UNIFORM_PMATRIX = 0,
		UNIFORM_MVMATRIX = 0,
		UNIFORM_MVPMATRIX = 0,
		UNIFORM_TIME = 0,
		UNIFORM_SINTIME = 0,
		UNIFORM_COSTIME = 0,
		UNIFORM_RANDOM01 = 0,
		UNIFORM_SAMPLER = 0,
		UNIFORM_MAX = 0,
		SHADER_POSITION_TEXTURECOLOR = 0,
		SHADER_POSITION_TEXTURECOLORALPHATEST = 0,
		SHADER_POSITION_COLOR = 0,
		SHADER_POSITION_TEXTURE = 0,
		SHADER_POSITION_TEXTURE_UCOLOR = 0,
		SHADER_POSITION_TEXTUREA8COLOR = 0,
		SHADER_POSITION_UCOLOR = 0,
		SHADER_POSITION_LENGTHTEXTURECOLOR = 0,
		UNIFORM_PMATRIX_S = 0,
		UNIFORM_MVMATRIX_S = 0,
		UNIFORM_MVPMATRIX_S = 0,
		UNIFORM_TIME_S = 0,
		UNIFORM_SINTIME_S = 0,
		UNIFORM_COSTIME_S = 0,
		UNIFORM_RANDOM01_S = 0,
		UNIFORM_SAMPLER_S = 0,
		UNIFORM_ALPHA_TEST_VALUE_S = 0,
		ATTRIBUTE_NAME_COLOR = 0,
		ATTRIBUTE_NAME_POSITION = 0,
		ATTRIBUTE_NAME_TEX_COORD = 0,
		ITEM_SIZE = 0,
		CURRENT_ITEM = 0,
		ZOOM_ACTION_TAG = 0,
		NORMAL_TAG = 0,
		SELECTED_TAG = 0,
		DISABLE_TAG = 0,
		FIX_ARTIFACTS_BY_STRECHING_TEXEL = 0,
		DIRECTOR_STATS_POSITION = 0,
		DIRECTOR_FPS_INTERVAL = 0,
		COCOSNODE_RENDER_SUBPIXEL = 0,
		SPRITEBATCHNODE_RENDER_SUBPIXEL = 0,
		AUTO_PREMULTIPLIED_ALPHA_FOR_PNG = 0,
		OPTIMIZE_BLEND_FUNC_FOR_PREMULTIPLIED_ALPHA = 0,
		TEXTURE_ATLAS_USE_TRIANGLE_STRIP = 0,
		TEXTURE_ATLAS_USE_VAO = 0,
		USE_LA88_LABELS = 0,
		SPRITE_DEBUG_DRAW = 0,
		LABELBMFONT_DEBUG_DRAW = 0,
		LABELATLAS_DEBUG_DRAW = 0,
		ENABLE_STACKABLE_ACTIONS = 0,
		ENABLE_GL_STATE_CACHE = 0,
		BLEND_SRC = 0,
		lerp = 0,
		rand = 0,
		randomMinus1To1 = 0,
		random0To1 = 0,
		degreesToRadians = 0,
		radiansToDegrees = 0,
		nodeDrawSetup = 0,
		incrementGLDraws = 0,
		checkGLErrorDebug = 0,	
	}		
		/** The base class of most of all the objects in Fireball. */
		export class Object {		
		constructor();		
		/** The name of the object. */
		name : string;		
		/** Indicates whether the object is not yet destroyed */
		isValid : boolean;		
		/** Destroy this Object, and release all its own references to other objects.
		
		After destroy, this CCObject is not usable any more.
		You can use cc.isValid(obj) (or obj.isValid if obj is non-nil) to check whether the object is destroyed before
		accessing it. 
		*/
		destroy() : boolean;		
		/** In fact, Object's "destroy" will not trigger the destruct operation in Firebal Editor.
		The destruct operation will be executed by Undo system later. 
		*/
		realDestroyInEditor() : void;	
	}		
		/** Bit mask that controls object states. */
		export class Flags {		
		/** The object will not be saved. */
		DontSave : number;		
		/** The object will not be saved when building a player. */
		EditorOnly : number;		
		/** Hide in game and hierarchy.
		This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags() */
		HideInGame : number;		
		/** This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags() */
		HideInEditor : number;		
		/** Hide in game view, hierarchy, and scene view... etc.
		This flag is readonly, it can only be used as an argument of scene.addEntity() or Entity.createWithFlags() */
		Hide : number;	
	}		
		/** The fullscreen API provides an easy way for web content to be presented using the user's entire screen.
		It's invalid on safari, QQbrowser and android browser */
		export class screen {		
		/** initialize 
		*/
		init() : void;		
		/** return true if it's full now. 
		*/
		fullScreen() : boolean;		
		/** change the screen to full mode. 
		*/
		requestFullScreen(element : Element, onFullScreenChange : Function) : void;		
		/** exit the full mode. 
		*/
		exitFullScreen() : boolean;		
		/** Automatically request full screen with a touch/click event 
		*/
		autoFullScreen(element : Element, onFullScreenChange : Function) : void;	
	}		
		/** System variables */
		export class sys {		
		/** English language code */
		LANGUAGE_ENGLISH : string;		
		/** Chinese language code */
		LANGUAGE_CHINESE : string;		
		/** French language code */
		LANGUAGE_FRENCH : string;		
		/** Italian language code */
		LANGUAGE_ITALIAN : string;		
		/** German language code */
		LANGUAGE_GERMAN : string;		
		/** Spanish language code */
		LANGUAGE_SPANISH : string;		
		/** Spanish language code */
		LANGUAGE_DUTCH : string;		
		/** Russian language code */
		LANGUAGE_RUSSIAN : string;		
		/** Korean language code */
		LANGUAGE_KOREAN : string;		
		/** Japanese language code */
		LANGUAGE_JAPANESE : string;		
		/** Hungarian language code */
		LANGUAGE_HUNGARIAN : string;		
		/** Portuguese language code */
		LANGUAGE_PORTUGUESE : string;		
		/** Arabic language code */
		LANGUAGE_ARABIC : string;		
		/** Norwegian language code */
		LANGUAGE_NORWEGIAN : string;		
		/** Polish language code */
		LANGUAGE_POLISH : string;		
		/** Unknown language code */
		LANGUAGE_UNKNOWN : string;		
		OS_IOS : string;		
		OS_ANDROID : string;		
		OS_WINDOWS : string;		
		OS_MARMALADE : string;		
		OS_LINUX : string;		
		OS_BADA : string;		
		OS_BLACKBERRY : string;		
		OS_OSX : string;		
		OS_WP8 : string;		
		OS_WINRT : string;		
		OS_UNKNOWN : string;		
		UNKNOWN : number;		
		WIN32 : number;		
		LINUX : number;		
		MACOS : number;		
		ANDROID : number;		
		IOS : number;		
		IPAD : number;		
		BLACKBERRY : number;		
		NACL : number;		
		EMSCRIPTEN : number;		
		TIZEN : number;		
		WINRT : number;		
		WP8 : number;		
		MOBILE_BROWSER : number;		
		DESKTOP_BROWSER : number;		
		/** Indicates whether executes in editor's window process (Electron's renderer context) */
		EDITOR_PAGE : number;		
		/** Indicates whether executes in editor's main process (Electron's browser context) */
		EDITOR_CORE : number;		
		/** BROWSER_TYPE_WECHAT */
		BROWSER_TYPE_WECHAT : string;		
		BROWSER_TYPE_ANDROID : string;		
		BROWSER_TYPE_IE : string;		
		BROWSER_TYPE_QQ : string;		
		BROWSER_TYPE_MOBILE_QQ : string;		
		BROWSER_TYPE_UC : string;		
		BROWSER_TYPE_360 : string;		
		BROWSER_TYPE_BAIDU_APP : string;		
		BROWSER_TYPE_BAIDU : string;		
		BROWSER_TYPE_MAXTHON : string;		
		BROWSER_TYPE_OPERA : string;		
		BROWSER_TYPE_OUPENG : string;		
		BROWSER_TYPE_MIUI : string;		
		BROWSER_TYPE_FIREFOX : string;		
		BROWSER_TYPE_SAFARI : string;		
		BROWSER_TYPE_CHROME : string;		
		BROWSER_TYPE_LIEBAO : string;		
		BROWSER_TYPE_QZONE : string;		
		BROWSER_TYPE_SOUGOU : string;		
		BROWSER_TYPE_UNKNOWN : string;		
		/** Is native ? This is set to be true in jsb auto. */
		isNative : boolean;		
		/** Is web browser ? */
		isBrowser : boolean;		
		/** Indicate whether system is mobile system */
		isMobile : boolean;		
		/** Indicate the running platform */
		platform : number;		
		/** Indicate the current language of the running system */
		language : string;		
		/** Indicate the running os name */
		os : string;		
		/** Indicate the running browser type */
		browserType : string;		
		/** Indicate the running browser version */
		browserVersion : number;		
		/** Indicate the real pixel resolution of the whole game window */
		windowPixelResolution : number;		
		/** cc.sys.localStorage is a local storage component. */
		localStorage : any;		
		/** The capabilities of the current platform */
		capabilities : any;		
		/** Forces the garbage collection, only available in JSB 
		*/
		garbageCollect() : void;		
		/** Dumps rooted objects, only available in JSB 
		*/
		dumpRoot() : void;		
		/** Restart the JS VM, only available in JSB 
		*/
		restartVM() : void;		
		/** Clean a script in the JS VM, only available in JSB 
		*/
		cleanScript(jsfile : string) : void;		
		/** Check whether an object is valid,
		In web engine, it will return true if the object exist
		In native engine, it will return true if the JS object and the correspond native object are both valid 
		*/
		isObjectValid(obj : any) : boolean;		
		/** Dump system informations 
		*/
		dump() : void;		
		/** Open a url in browser 
		*/
		openURL(url : string) : void;	
	}		
		/** cc.view is the singleton object which represents the game window.<br/>
		It's main task include: <br/>
		 - Apply the design resolution policy<br/>
		 - Provide interaction with the window, like resize event on web, retina display support, etc...<br/>
		 - Manage the game view port which can be different with the window<br/>
		 - Manage the content scale and translation<br/>
		<br/>
		Since the cc.view is a singleton, you don't need to call any constructor or create functions,<br/>
		the standard way to use it is by calling:<br/>
		 - cc.view.methodName(); <br/> */
		export class View {		
		/** <p>
		Sets view's target-densitydpi for android mobile browser. it can be set to:           <br/>
		  1. cc.macro.DENSITYDPI_DEVICE, value is "device-dpi"                                      <br/>
		  2. cc.macro.DENSITYDPI_HIGH, value is "high-dpi"  (default value)                         <br/>
		  3. cc.macro.DENSITYDPI_MEDIUM, value is "medium-dpi" (browser's default value)            <br/>
		  4. cc.macro.DENSITYDPI_LOW, value is "low-dpi"                                            <br/>
		  5. Custom value, e.g: "480"                                                         <br/>
		</p> 
		*/
		setTargetDensityDPI(densityDPI : string) : void;		
		/** Returns the current target-densitydpi value of cc.view. 
		*/
		getTargetDensityDPI() : string;		
		/** Sets whether resize canvas automatically when browser's size changed.<br/>
		Useful only on web.
		@param enabled Whether enable automatic resize with browser's resize event 
		*/
		resizeWithBrowserSize(enabled : boolean) : void;		
		/** Sets the callback function for cc.view's resize action,<br/>
		this callback will be invoked before applying resolution policy, <br/>
		so you can do any additional modifications within the callback.<br/>
		Useful only on web.
		@param callback The callback function 
		*/
		setResizeCallback(callback : Function|void) : void;		
		/** Sets whether the engine modify the "viewport" meta in your web page.<br/>
		It's enabled by default, we strongly suggest you not to disable it.<br/>
		And even when it's enabled, you can still set your own "viewport" meta, it won't be overridden<br/>
		Only useful on web
		@param enabled Enable automatic modification to "viewport" meta 
		*/
		adjustViewPort(enabled : boolean) : void;		
		/** Retina support is enabled by default for Apple device but disabled for other devices,<br/>
		it takes effect only when you called setDesignResolutionPolicy<br/>
		Only useful on web
		@param enabled Enable or disable retina display 
		*/
		enableRetina(enabled : boolean) : void;		
		/** Check whether retina display is enabled.<br/>
		Only useful on web 
		*/
		isRetinaEnabled() : boolean;		
		/** If enabled, the application will try automatically to enter full screen mode on mobile devices<br/>
		You can pass true as parameter to enable it and disable it by passing false.<br/>
		Only useful on web
		@param enabled Enable or disable auto full screen on mobile devices 
		*/
		enableAutoFullScreen(enabled : boolean) : void;		
		/** Check whether auto full screen is enabled.<br/>
		Only useful on web 
		*/
		isAutoFullScreenEnabled() : boolean;		
		/** Get whether render system is ready(no matter opengl or canvas),<br/>
		this name is for the compatibility with cocos2d-x, subclass must implement this method. 
		*/
		isOpenGLReady() : boolean;		
		/** Open or close IME keyboard , subclass must implement this method. 
		*/
		setIMEKeyboardState(isOpen : boolean) : void;		
		/** Sets the resolution translate on View. 
		*/
		setContentTranslateLeftTop(offsetLeft : number, offsetTop : number) : void;		
		/** Returns the resolution translate on View 
		*/
		getContentTranslateLeftTop() : Size;		
		/** Not support on native.<br/>
		On web, it sets the size of the canvas. 
		*/
		setCanvasSize(width : number, height : number) : void;		
		/** Returns the canvas size of the view.<br/>
		On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
		On web, it returns the size of the canvas element. 
		*/
		getCanvasSize() : Size;		
		/** Returns the frame size of the view.<br/>
		On native platforms, it returns the screen size since the view is a fullscreen view.<br/>
		On web, it returns the size of the canvas's outer DOM element. 
		*/
		getFrameSize() : Size;		
		/** On native, it sets the frame size of view.<br/>
		On web, it sets the size of the canvas's outer DOM element. 
		*/
		setFrameSize(width : number, height : number) : void;		
		/** Returns the visible area size of the view port. 
		*/
		getVisibleSize() : Size;		
		/** Returns the visible area size of the view port. 
		*/
		getVisibleSizeInPixel() : Size;		
		/** Returns the visible origin of the view port. 
		*/
		getVisibleOrigin() : Vec2;		
		/** Returns the visible origin of the view port. 
		*/
		getVisibleOriginInPixel() : Vec2;		
		/** Returns whether developer can set content's scale factor. 
		*/
		canSetContentScaleFactor() : boolean;		
		/** Returns the current resolution policy 
		*/
		getResolutionPolicy() : ResolutionPolicy;		
		/** Sets the current resolution policy 
		*/
		setResolutionPolicy(resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Sets the resolution policy with designed view size in points.<br/>
		The resolution policy include: <br/>
		[1] ResolutionExactFit       Fill screen by stretch-to-fit: if the design resolution ratio of width to height is different from the screen resolution ratio, your game view will be stretched.<br/>
		[2] ResolutionNoBorder       Full screen without black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two areas of your game view will be cut.<br/>
		[3] ResolutionShowAll        Full screen with black border: if the design resolution ratio of width to height is different from the screen resolution ratio, two black borders will be shown.<br/>
		[4] ResolutionFixedHeight    Scale the content's height to screen's height and proportionally scale its width<br/>
		[5] ResolutionFixedWidth     Scale the content's width to screen's width and proportionally scale its height<br/>
		[cc.ResolutionPolicy]        [Web only feature] Custom resolution policy, constructed by cc.ResolutionPolicy<br/>
		@param width Design resolution width.
		@param height Design resolution height.
		@param resolutionPolicy The resolution policy desired 
		*/
		setDesignResolutionSize(width : number, height : number, resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Returns the designed size for the view.
		Default resolution size is the same as 'getFrameSize'. 
		*/
		getDesignResolutionSize() : Size;		
		/** Sets the container to desired pixel resolution and fit the game content to it.
		This function is very useful for adaptation in mobile browsers.
		In some HD android devices, the resolution is very high, but its browser performance may not be very good.
		In this case, enabling retina display is very costy and not suggested, and if retina is disabled, the image may be blurry.
		But this API can be helpful to set a desired pixel resolution which is in between.
		This API will do the following:
		    1. Set viewport's width to the desired width in pixel
		    2. Set body width to the exact pixel resolution
		    3. The resolution policy will be reset with designed view size in points.
		@param width Design resolution width.
		@param height Design resolution height.
		@param resolutionPolicy The resolution policy desired 
		*/
		setRealPixelResolution(width : number, height : number, resolutionPolicy : ResolutionPolicy|number) : void;		
		/** Sets view port rectangle with points.
		@param w width
		@param h height 
		*/
		setViewPortInPoints(x : number, y : number, w : number, h : number) : void;		
		/** Sets Scissor rectangle with points. 
		*/
		setScissorInPoints(x : number, y : number, w : number, h : number) : void;		
		/** Returns whether GL_SCISSOR_TEST is enable 
		*/
		isScissorEnabled() : boolean;		
		/** Returns the current scissor rectangle 
		*/
		getScissorRect() : Rect;		
		/** Sets the name of the view 
		*/
		setViewName(viewName : string) : void;		
		/** Returns the name of the view 
		*/
		getViewName() : string;		
		/** Returns the view port rectangle. 
		*/
		getViewPortRect() : Rect;		
		/** Returns scale factor of the horizontal direction (X axis). 
		*/
		getScaleX() : number;		
		/** Returns scale factor of the vertical direction (Y axis). 
		*/
		getScaleY() : number;		
		/** Returns device pixel ratio for retina display. 
		*/
		getDevicePixelRatio() : number;		
		/** Returns the real location in view for a translation based on a related position
		@param tx The X axis translation
		@param ty The Y axis translation
		@param relatedPos The related position object including "left", "top", "width", "height" informations 
		*/
		convertToLocationInView(tx : number, ty : number, relatedPos : any) : Vec2;	
	}		
		/** <p>cc.ContainerStrategy class is the root strategy class of container's scale strategy,
		it controls the behavior of how to scale the cc.container and cc.game.canvas object</p> */
		export class ContainerStrategy {		
		/** Manipulation before appling the strategy
		@param view The target view 
		*/
		preApply(view : view) : void;		
		/** Function to apply this strategy 
		*/
		apply(view : view, designedResolution : Size) : void;		
		/** Manipulation after applying the strategy
		@param view The target view 
		*/
		postApply(view : view) : void;	
	}		
		/** <p>cc.ContentStrategy class is the root strategy class of content's scale strategy,
		it controls the behavior of how to scale the scene and setup the viewport for the game</p> */
		export class ContentStrategy {		
		/** Manipulation before applying the strategy
		@param view The target view 
		*/
		preApply(view : view) : void;		
		/** Function to apply this strategy
		The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
		The target view can then apply these value to itself, it's preferred not to modify directly its private variables 
		*/
		apply(view : view, designedResolution : Size) : any;		
		/** Manipulation after applying the strategy
		@param view The target view 
		*/
		postApply(view : view) : void;	
	}		
		/** undefined */
		export class EqualToFrame extends ContainerStrategy {	
	}		
		/** undefined */
		export class ProportionalToFrame extends ContainerStrategy {	
	}		
		/** undefined */
		export class EqualToWindow extends EqualToFrame {	
	}		
		/** undefined */
		export class ProportionalToWindow extends ProportionalToFrame {	
	}		
		/** undefined */
		export class OriginalContainer extends ContainerStrategy {	
	}		
		/** <p>cc.ResolutionPolicy class is the root strategy class of scale strategy,
		its main task is to maintain the compatibility with Cocos2d-x</p> */
		export class ResolutionPolicy {		
		/** 
		@param containerStg The container strategy
		@param contentStg The content strategy 
		*/
		ResolutionPolicy(containerStg : ContainerStrategy, contentStg : ContentStrategy) : void;		
		/** Manipulation before applying the resolution policy
		@param view The target view 
		*/
		preApply(view : view) : void;		
		/** Function to apply this resolution policy
		The return value is {scale: [scaleX, scaleY], viewport: {cc.Rect}},
		The target view can then apply these value to itself, it's preferred not to modify directly its private variables
		@param view The target view
		@param designedResolution The user defined design resolution 
		*/
		apply(view : view, designedResolution : Size) : any;		
		/** Manipulation after appyling the strategy
		@param view The target view 
		*/
		postApply(view : view) : void;		
		/** Setup the container's scale strategy 
		*/
		setContainerStrategy(containerStg : ContainerStrategy) : void;		
		/** Setup the content's scale strategy 
		*/
		setContentStrategy(contentStg : ContentStrategy) : void;		
		/** The entire application is visible in the specified area without trying to preserve the original aspect ratio.<br/>
		Distortion can occur, and the application may appear stretched or compressed. */
		EXACT_FIT : number;		
		/** The entire application fills the specified area, without distortion but possibly with some cropping,<br/>
		while maintaining the original aspect ratio of the application. */
		NO_BORDER : number;		
		/** The entire application is visible in the specified area without distortion while maintaining the original<br/>
		aspect ratio of the application. Borders can appear on two sides of the application. */
		SHOW_ALL : number;		
		/** The application takes the height of the design resolution size and modifies the width of the internal<br/>
		canvas so that it fits the aspect ratio of the device<br/>
		no distortion will occur however you must make sure your application works on different<br/>
		aspect ratios */
		FIXED_HEIGHT : number;		
		/** The application takes the width of the design resolution size and modifies the height of the internal<br/>
		canvas so that it fits the aspect ratio of the device<br/>
		no distortion will occur however you must make sure your application works on different<br/>
		aspect ratios */
		FIXED_WIDTH : number;		
		/** Unknow policy */
		UNKNOWN : number;	
	}		
		/** cc.visibleRect is a singleton object which defines the actual visible rect of the current view,
		it should represent the same rect as cc.view.getViewportRect() */
		export class visibleRect {		
		/** initialize 
		*/
		init(visibleRect : Rect) : void;		
		/** Top left coordinate of the screen related to the game scene. */
		topLeft : Vec2;		
		/** Top right coordinate of the screen related to the game scene. */
		topRight : Vec2;		
		/** Top center coordinate of the screen related to the game scene. */
		top : Vec2;		
		/** Bottom left coordinate of the screen related to the game scene. */
		bottomLeft : Vec2;		
		/** Bottom right coordinate of the screen related to the game scene. */
		bottomRight : Vec2;		
		/** Bottom center coordinate of the screen related to the game scene. */
		bottom : Vec2;		
		/** Center coordinate of the screen related to the game scene. */
		center : Vec2;		
		/** Left center coordinate of the screen related to the game scene. */
		left : Vec2;		
		/** Right center coordinate of the screen related to the game scene. */
		right : Vec2;		
		/** Width of the screen. */
		width : number;		
		/** Height of the screen. */
		height : number;	
	}		
		/** The CallbacksHandler is an abstract class that can register and unregister callbacks by key.
		Subclasses should implement their own methods about how to invoke the callbacks. */
		export class _CallbacksHandler {		
		constructor();		
		/** 
		@param callback can be null
		@param target can be null 
		*/
		add(key : string, callback : Function, target : any) : boolean;		
		/** Check if the specified key has any registered callback. If a callback is also specified,
		it will only return true if the callback is registered. 
		*/
		has(key : string, callback? : Function, target? : any) : boolean;		
		/** Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
		@param key The event key to be removed or the target to be removed 
		*/
		removeAll(key : string|any) : void;		
		/**  
		*/
		remove(key : string, callback : Function, target : any) : boolean;	
	}		
		/** The callbacks invoker to handle and invoke callbacks by key */
		export class CallbacksInvoker extends _CallbacksHandler {		
		constructor();		
		/**  
		*/
		invoke(key : string, p1? : any, p2? : any, p3? : any, p4? : any, p5? : any) : void;		
		/**  
		*/
		invokeAndRemove(key : string, p1? : any, p2? : any, p3? : any, p4? : any, p5? : any) : void;		
		/** 
		@param remove remove callbacks after invoked 
		*/
		bindKey(key : string, remove? : boolean) : Function;	
	}		
		/** !#en Contains information collected during deserialization
		!#zh 包含反序列化时的一些信息 */
		export class Details {		
		constructor();		
		/** list of the depends assets' uuid */
		uuidList : String[];		
		/** the obj list whose field needs to load asset by uuid */
		uuidObjList : any[];		
		/** the corresponding field name which referenced to the asset */
		uuidPropList : String[];		
		/** the corresponding field name which referenced to the raw object */
		rawProp : string;		
		reset() : void;		
		/**  
		*/
		getUuidOf(obj : any, propName : string) : string;		
		/**  
		*/
		assignAssetsBy(getter : Function) : boolean;		
		/**  
		*/
		push(obj : any, propName : string, uuid : string) : void;	
	}		
		/** undefined */
		export class url {		
		/** Returns the url of raw assets.
		
		@example 
		```js
		---
		var url = cc.url.raw("textures/myTexture.png");
		console.log(url);   // "resources/raw/textures/myTexture.png"
		
		``` 
		*/
		raw(url : string) : string;		
		/** Returns the url of builtin raw assets. This method can only used in editor.
		
		@example 
		```js
		---
		var url = cc.url.builtinRaw("textures/myTexture.png");
		console.log(url);   // "resources/default-raw/textures/myTexture.png"
		
		``` 
		*/
		builtinRaw(url : string) : string;	
	}		
		/** A base node for CCNode and CCEScene, it will:
		- provide the same api with origin cocos2d rendering node (SGNode)
		- maintains properties of the internal SGNode
		- retain and release the SGNode
		- serialize datas for SGNode (but SGNode itself will not being serialized)
		- notifications if some properties changed
		- define some interfaces shares between CCNode and CCEScene */
		export class _BaseNode extends Object {		
		/** Name of node */
		name : string;		
		/** The parent of the node. */
		parent : Node;		
		/** The uuid for editor, will be stripped before building project */
		uuid : string;		
		/** Skew x */
		skewX : number;		
		/** Skew y */
		skewY : number;		
		/** Z order in depth which stands for the drawing order. */
		zIndex : number;		
		/** Rotation of node */
		rotation : number;		
		/** Rotation on x axis */
		rotationX : number;		
		/** Rotation on y axis */
		rotationY : number;		
		/** Scale on x axis */
		scaleX : number;		
		/** Scale on y axis */
		scaleY : number;		
		/** x axis position of node. */
		x : number;		
		/** y axis position of node. */
		y : number;		
		/** All children nodes */
		children : Node[];		
		/** All children nodes. */
		childrenCount : number;		
		/** Anchor point's position on x axis. */
		anchorX : number;		
		/** Anchor point's position on y axis. */
		anchorY : number;		
		/** Width of node. */
		width : number;		
		/** Height of node. */
		height : number;		
		/** Tag of node. */
		tag : number;		
		/** Opacity of node, default value is 255. */
		opacity : number;		
		/** Indicate whether node's opacity value affect its child nodes, default value is false. */
		cascadeOpacity : boolean;		
		/** Color of node, default value is white: (255, 255, 255). */
		color : Color;		
		/** Initializes the instance of cc.Node 
		*/
		init() : boolean;		
		/** <p>Properties configuration function </br>
		All properties in attrs will be set to the node, </br>
		when the setter of the node is available, </br>
		the property will be set via setter function.</br>
		</p>
		@param attrs Properties to be set to node 
		*/
		attr(attrs : any) : void;		
		/** <p>Defines the oder in which the nodes are renderer.                                                                               <br/>
		Nodes that have a Global Z Order lower, are renderer first.                                                                        <br/>
		                                                                                                                                   <br/>
		In case two or more nodes have the same Global Z Order, the oder is not guaranteed.                                                <br/>
		The only exception if the Nodes have a Global Z Order == 0. In that case, the Scene Graph order is used.                           <br/>
		                                                                                                                                   <br/>
		By default, all nodes have a Global Z Order = 0. That means that by default, the Scene Graph order is used to render the nodes.    <br/>
		                                                                                                                                   <br/>
		Global Z Order is useful when you need to render nodes in an order different than the Scene Graph order.                           <br/>
		                                                                                                                                   <br/>
		Limitations: Global Z Order can't be used used by Nodes that have SpriteBatchNode as one of their ancestors.                       <br/>
		And if ClippingNode is one of the ancestors, then "global Z order" will be relative to the ClippingNode.   </p> 
		*/
		setGlobalZOrder(globalZOrder : number) : void;		
		/** Return the Node's Global Z Order. 
		*/
		getGlobalZOrder() : number;		
		/** Returns the scale factor of the node.
		Assertion will fail when _scaleX != _scaleY. 
		*/
		getScale() : number;		
		/** Sets the scale factor of the node. 1.0 is the default scale factor. This function can modify the X and Y scale at the same time.
		@param scale scaleX or scale 
		*/
		setScale(scale : number|Vec2, scaleY? : number) : void;		
		/** <p>Returns a copy of the position (x,y) of the node in cocos2d coordinates. (0,0) is the left-bottom corner.</p> 
		*/
		getPosition() : Vec2;		
		/** <p>
		    Changes the position (x,y) of the node in cocos2d coordinates.<br/>
		    The original point (0,0) is at the left-bottom corner of screen.<br/>
		    Usually we use cc.p(x,y) to compose CCPoint object.<br/>
		    and Passing two numbers (x,y) is more efficient than passing CCPoint object.
		</p>
		@param newPosOrxValue The position (x,y) of the node in coordinates or the X coordinate for position
		@param yValue Y coordinate for position
		
		@example 
		```js
		---------------------------------
		var size = cc.winSize;
		node.setPosition(size.width/2, size.height/2);
		
		``` 
		*/
		setPosition(newPosOrxValue : Vec2|number, yValue? : number) : void;		
		/** <p>Returns a copy of the anchor point.<br/>
		Anchor point is the point around which all transformations and positioning manipulations take place.<br/>
		It's like a pin in the node where it is "attached" to its parent. <br/>
		The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
		But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
		The default anchor point is (0.5,0.5), so it starts at the center of the node. <br/></p> 
		*/
		getAnchorPoint() : Vec2;		
		/** <p>
		    Sets the anchor point in percent.                                                                                              <br/>
		                                                                                                                                   <br/>
		    anchor point is the point around which all transformations and positioning manipulations take place.                            <br/>
		    It's like a pin in the node where it is "attached" to its parent.                                                              <br/>
		    The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner.     <br/>
		    But you can use values higher than (1,1) and lower than (0,0) too.                                                             <br/>
		    The default anchor point is (0.5,0.5), so it starts at the center of the node.
		</p>
		@param point The anchor point of node or The x axis anchor of node.
		@param y The y axis anchor of node. 
		*/
		setAnchorPoint(point : Vec2|number, y? : number) : void;		
		/** Returns a copy of the anchor point in absolute pixels.  <br/>
		you can only read it. If you wish to modify it, use setAnchorPoint 
		*/
		getAnchorPointInPoints() : Vec2;		
		/** <p>Returns a copy the untransformed size of the node. <br/>
		The contentSize remains the same no matter the node is scaled or rotated.<br/>
		All nodes has a size. Layer and Scene has the same size of the screen by default. <br/></p>
		@param ignoreSizeProvider true if you need to get the original size of the node 
		*/
		getContentSize(ignoreSizeProvider? : boolean) : Size;		
		/** <p>
		    Sets the untransformed size of the node.                                             <br/>
		                                                                                         <br/>
		    The contentSize remains the same no matter the node is scaled or rotated.            <br/>
		    All nodes has a size. Layer and Scene has the same size of the screen.
		</p>
		@param size The untransformed size of the node or The untransformed size's width of the node.
		@param height The untransformed size's height of the node. 
		*/
		setContentSize(size : Size|number, height? : number) : void;		
		/** Returns a "local" axis aligned bounding box of the node. <br/>
		The returned box is relative only to its parent. 
		*/
		getBoundingBox() : Rect;		
		/** Stops all running actions and schedulers 
		*/
		cleanup() : void;		
		/** Returns a child from the container given its tag
		@param aTag An identifier to find the child node. 
		*/
		getChildByTag(aTag : number) : Node;		
		/** Returns a child from the container given its name
		@param name A name to find the child node. 
		*/
		getChildByName(name : string) : Node;		
		/** <p>If the child is added to a 'running' node, then 'onEnter' and 'onEnterTransitionDidFinish' will be called immediately.</p>
		@param child A child node
		@param localZOrder Z order for drawing priority. Please refer to setZOrder(int)
		@param tag An integer or a name to identify the node easily. Please refer to setTag(int) and setName(string) 
		*/
		addChild(child : Node, localZOrder? : number, tag? : number|string) : void;		
		/** Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks. <br/>
		If the cleanup parameter is not passed, it will force a cleanup. <br/>
		If the node orphan, then nothing happens.
		@param cleanup true if all actions and callbacks on this node should be removed, false otherwise. 
		*/
		removeFromParent(cleanup? : boolean) : void;		
		/** If the cleanup parameter is not passed, it will force a cleanup. <br/>
		<p> "remove" logic MUST only be on this method  <br/>
		If a class wants to extend the 'removeChild' behavior it only needs <br/>
		to override this method </p>
		@param child The child node which will be removed.
		@param cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise. 
		*/
		removeChild(child : Node, cleanup? : boolean) : void;		
		/** Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
		If the cleanup parameter is not passed, it will force a cleanup. <br/>
		@param tag An integer number that identifies a child node
		@param cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise. 
		*/
		removeChildByTag(tag : number, cleanup? : boolean) : void;		
		/** Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
		If the cleanup parameter is not passed, it will force a cleanup. <br/>
		@param cleanup true if all running actions on all children nodes should be cleanup, false otherwise. 
		*/
		removeAllChildren(cleanup? : boolean) : void;		
		/** Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
		The matrix is in Pixels.
		The returned transform is readonly and cannot be changed. 
		*/
		getParentToNodeTransform() : AffineTransform;		
		/** Returns the world affine transform matrix. The matrix is in Pixels. 
		*/
		getNodeToWorldTransform() : AffineTransform;		
		/** Returns the world affine transform matrix. The matrix is in Pixels.<br/>
		This method is AR (Anchor Relative). 
		*/
		getNodeToWorldTransformAR() : AffineTransform;		
		/** Returns the inverse world affine transform matrix. The matrix is in Pixels. 
		*/
		getWorldToNodeTransform() : AffineTransform;		
		/** Converts a Point to node (local) space coordinates. The result is in Points. 
		*/
		convertToNodeSpace(worldPoint : Vec2) : Vec2;		
		/** Converts a Point to world space coordinates. The result is in Points. 
		*/
		convertToWorldSpace(nodePoint : Vec2) : Vec2;		
		/** Converts a Point to node (local) space coordinates. The result is in Points.<br/>
		treating the returned/received node point as anchor relative. 
		*/
		convertToNodeSpaceAR(worldPoint : Vec2) : Vec2;		
		/** Converts a local Point to world space coordinates.The result is in Points.<br/>
		treating the returned/received node point as anchor relative. 
		*/
		convertToWorldSpaceAR(nodePoint : Vec2) : Vec2;		
		/** convenience methods which take a cc.Touch instead of cc.Vec2
		@param touch The touch object 
		*/
		convertTouchToNodeSpace(touch : Touch) : Vec2;		
		/** converts a cc.Touch (world coordinates) into a local coordinate. This method is AR (Anchor Relative).
		@param touch The touch object 
		*/
		convertTouchToNodeSpaceAR(touch : Touch) : Vec2;		
		/** Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
		The matrix is in Pixels. 
		*/
		getNodeToParentTransform() : AffineTransform;		
		/** Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
		The matrix is in Pixels.<br/>
		This method is AR (Anchor Relative). 
		*/
		getNodeToParentTransformAR() : AffineTransform;		
		/** Returns a "world" axis aligned bounding box of the node.<br/>
		The bounding box contains self and active children's world bounding box. 
		*/
		getBoundingBoxToWorld() : Rect;		
		/** Returns the displayed opacity of Node,
		the difference between displayed opacity and opacity is that displayed opacity is calculated based on opacity and parent node's opacity when cascade opacity enabled. 
		*/
		getDisplayedOpacity() : number;		
		/** Returns the displayed color of Node,
		the difference between displayed color and color is that displayed color is calculated based on color and parent node's color when cascade color enabled. 
		*/
		getDisplayedColor() : Color;		
		/** Set whether color should be changed with the opacity value,
		useless in ccsg.Node, but this function is override in some class to have such behavior. 
		*/
		setOpacityModifyRGB(opacityValue : boolean) : void;		
		/** Get whether color should be changed with the opacity value 
		*/
		isOpacityModifyRGB() : boolean;		
		/** Get the sibling index. 
		*/
		getSiblingIndex() : number;		
		/** Set the sibling index of this node. 
		*/
		setSiblingIndex(index : number) : void;		
		/** Is this node a child of the given node? 
		*/
		isChildOf(parent : Node) : boolean;		
		/** position of node. */
		position : Vec2;		
		/** Scale of node */
		scale : number;		
		/** <p>Returns the x axis position of the node in cocos2d coordinates.</p>
		@param x The new position in x axis 
		*/
		getPositionX(x : number) : void;		
		/** <p>Sets the x axis position of the node in cocos2d coordinates.</p> 
		*/
		setPositionX() : number;		
		/** <p>Returns the y axis position of the node in cocos2d coordinates.</p> 
		*/
		getPositionY() : number;		
		/** <p>Sets the y axis position of the node in cocos2d coordinates.</p>
		@param y The new position in y axis 
		*/
		setPositionY(y : number) : void;		
		/** Returns the local Z order of this node. 
		*/
		getLocalZOrder() : number;		
		/** <p> LocalZOrder is the 'key' used to sort the node relative to its siblings.                                    <br/>
		                                                                                                                <br/>
		The Node's parent will sort all its children based ont the LocalZOrder value.                                   <br/>
		If two nodes have the same LocalZOrder, then the node that was added first to the children's array              <br/>
		will be in front of the other node in the array.                                                                <br/>
		<br/>
		Also, the Scene Graph is traversed using the "In-Order" tree traversal algorithm ( http://en.wikipedia.org/wiki/Tree_traversal#In-order )
		<br/>
		And Nodes that have LocalZOder values smaller than 0 are the "left" subtree                                                 <br/>
		While Nodes with LocalZOder greater than 0 are the "right" subtree.    </p> 
		*/
		setLocalZOrder(localZOrder : number) : void;		
		/** Returns whether the anchor point will be ignored when you position this node.<br/>
		When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates. 
		*/
		isIgnoreAnchorPointForPosition() : boolean;		
		/** <p>
		    Sets whether the anchor point will be ignored when you position this node.                              <br/>
		    When anchor point ignored, position will be calculated based on the origin point (0, 0) in parent's coordinates.  <br/>
		    This is an internal method, only used by CCLayer and CCScene. Don't call it outside framework.        <br/>
		    The default value is false, while in CCLayer and CCScene are true
		</p>
		@param newValue true if anchor point will be ignored when you position this node 
		*/
		ignoreAnchorPointForPosition(newValue : boolean) : void;		
		/** Returns whether node's opacity value affect its child nodes. 
		*/
		isCascadeOpacityEnabled() : boolean;		
		/** Enable or disable cascade opacity, if cascade enabled, child nodes' opacity will be the multiplication of parent opacity and its own opacity. 
		*/
		setCascadeOpacityEnabled(cascadeOpacityEnabled : boolean) : void;		
		/** Returns whether node's color value affect its child nodes. 
		*/
		isCascadeColorEnabled() : boolean;		
		/** Enable or disable cascade color, if cascade enabled, child nodes' opacity will be the cascade value of parent color and its own color. 
		*/
		setCascadeColorEnabled(cascadeColorEnabled : boolean) : void;	
	}		
		/** EventTarget is an object to which an event is dispatched when something has occurred.
		Entity are the most common event targets, but other objects can be event targets too.
		
		Event targets are an important part of the Fireball event model.
		The event target serves as the focal point for how events flow through the scene graph.
		When an event such as a mouse click or a keypress occurs, Fireball dispatches an event object
		into the event flow from the root of the hierarchy. The event object then makes its way through
		the scene graph until it reaches the event target, at which point it begins its return trip through
		the scene graph. This round-trip journey to the event target is conceptually divided into three phases:
		- The capture phase comprises the journey from the root to the last node before the event target's node
		- The target phase comprises only the event target node
		- The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the tree
		See also: http://www.w3.org/TR/DOM-Level-3-Events/#event-flow
		
		Event targets can implement the following methods:
		 - _getCapturingTargets
		 - _getBubblingTargets */
		export class EventTarget {		
		/** Register an callback of a specific event type on the EventTarget.
		This method is merely an alias to addEventListener.
		@param type A string representing the event type to listen for.
		@param callback The callback that will be invoked when the event is dispatched.
		                             The callback is ignored if it is a duplicate (the callbacks are unique).
		@param target The target to invoke the callback, can be null
		@param useCapture When set to true, the capture argument prevents callback
		                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
		                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
		                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET. 
		*/
		on(type : string, callback: (param: Event) => void, target? : any, useCapture? : boolean) : Function;		
		/** Removes the callback previously registered with the same type, callback, target and or useCapture.
		This method is merely an alias to removeEventListener.
		@param type A string representing the event type being removed.
		@param callback The callback to remove.
		@param target The target to invoke the callback, if it's not given, only callback without target will be removed
		@param useCapture Specifies whether the callback being removed was registered as a capturing callback or not.
		                             If not specified, useCapture defaults to false. If a callback was registered twice,
		                             one with capture and one without, each must be removed separately. Removal of a capturing callback
		                             does not affect a non-capturing version of the same listener, and vice versa. 
		*/
		off(type : string, callback : Function, target? : any, useCapture? : boolean) : void;		
		/** Removes all callbacks previously registered with the same target.
		@param target The target to be searched for all related callbacks 
		*/
		targetOff(target : any) : void;		
		/** Register an callback of a specific event type on the EventTarget, the callback will remove itself after the first time it is triggered.
		@param type A string representing the event type to listen for.
		@param callback The callback that will be invoked when the event is dispatched.
		                             The callback is ignored if it is a duplicate (the callbacks are unique).
		@param target The target to invoke the callback, can be null
		@param useCapture When set to true, the capture argument prevents callback
		                             from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE.
		                             When false, callback will NOT be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
		                             Either way, callback will be invoked when event's eventPhase attribute value is AT_TARGET. 
		*/
		once(type : string, callback: (param: Event) => void, target? : any, useCapture? : boolean) : void;		
		/** Dispatches an event into the event flow. The event target is the EventTarget object upon which the dispatchEvent() method is called.
		@param event The Event object that is dispatched into the event flow 
		*/
		dispatchEvent(event : Event) : boolean;		
		/** Send an event to this object directly, this method will not propagate the event to any other objects.
		The event will be created from the supplied message, you can get the "detail" argument from event.detail.
		@param message the message to send
		@param detail whatever argument the message needs 
		*/
		emit(message : string, detail? : any) : void;		
		/** Get whether the target is active for events.
		The name is for avoiding conflict with user defined functions.
		
		Subclasses can override this method to make event target active or inactive.
		@param type the event type 
		*/
		_isTargetActive(type : string) : boolean;		
		/** Get all the targets listening to the supplied type of event in the target's capturing phase.
		The capturing phase comprises the journey from the root to the last node BEFORE the event target's node.
		The result should save in the array parameter, and MUST SORT from child nodes to parent nodes.
		
		Subclasses can override this method to make event propagable.
		@param type the event type
		@param array the array to receive targets
		
		@example 
		```js
		----------
		Subclasses can override this method to make event propagable
		```js
		for (var target = this._parent; target; target = target._parent) {
		    if (target._capturingListeners && target._capturingListeners.has(type)) {
		        array.push(target);
		    }
		}
		
		``` 
		*/
		_getCapturingTargets(type : string, array : any[]) : void;		
		/** Get all the targets listening to the supplied type of event in the target's bubbling phase.
		The bubbling phase comprises any SUBSEQUENT nodes encountered on the return trip to the root of the tree.
		The result should save in the array parameter, and MUST SORT from child nodes to parent nodes.
		
		Subclasses can override this method to make event propagable.
		@param type the event type
		@param array the array to receive targets 
		*/
		_getBubblingTargets(type : string, array : any[]) : void;	
	}		
		/** Base class of all kinds of events. */
		export class Event {		
		constructor();		
		/** 
		@param type The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
		@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
		*/
		Event(type : string, bubbles? : boolean) : Event;		
		/** The name of the event (case-sensitive), e.g. "click", "fire", or "submit". */
		type : string;		
		/** Indicate whether the event bubbles up through the tree or not. */
		bubbles : boolean;		
		/** A reference to the target to which the event was originally dispatched. */
		target : any;		
		/** A reference to the currently registered target for the event. */
		currentTarget : any;		
		/** Indicates which phase of the event flow is currently being evaluated.
		Returns an integer value represented by 4 constants:
		 - Event.NONE = 0
		 - Event.CAPTURING_PHASE = 1
		 - Event.AT_TARGET = 2
		 - Event.BUBBLING_PHASE = 3
		The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
		(http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification. */
		eventPhase : number;		
		/** Reset the event for being stored in the object pool. 
		*/
		unuse() : string;		
		/** Reuse the event for being used again by the object pool. 
		*/
		reuse() : string;		
		/** If invoked when the cancelable attribute value is true, signals to the operation that caused event to be dispatched that it needs to be canceled. 
		*/
		preventDefault() : void;		
		/** Stops propagation for current event. 
		*/
		stopPropagation() : void;		
		/** Stops propagation for current event immediately,
		the event won't even be dispatched to the listeners attached in the current target. 
		*/
		stopPropagationImmediate() : void;		
		/** Checks whether the event has been stopped. 
		*/
		isStopped() : boolean;		
		/** <p>
		    Gets current target of the event                                                            <br/>
		    note: It only be available when the event listener is associated with node.                <br/>
		         It returns 0 when the listener is associated with fixed priority.
		</p> 
		*/
		getCurrentTarget() : Node;		
		/** Gets the event type. 
		*/
		getType() : string;		
		/** Code for event without type. */
		NO_TYPE : string;		
		/** Events not currently dispatched are in this phase */
		NONE : number;		
		/** The capturing phase comprises the journey from the root to the last node before the event target's node
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow */
		CAPTURING_PHASE : number;		
		/** The target phase comprises only the event target node
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow */
		AT_TARGET : number;		
		/** The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
		see http://www.w3.org/TR/DOM-Level-3-Events/#event-flow */
		BUBBLING_PHASE : number;	
	}		
		/** <p>
		This class allows to easily create OpenGL or Canvas 2D textures from images, text or raw data.                                    <br/>
		The created cc.Texture2D object will always have power-of-two dimensions.                                                <br/>
		Depending on how you create the cc.Texture2D object, the actual image area of the texture might be smaller than the texture dimensions <br/>
		 i.e. "contentSize" != (pixelsWide, pixelsHigh) and (maxS, maxT) != (1.0, 1.0).                                           <br/>
		Be aware that the content of the generated textures will be upside-down! </p> */
		export class Texture2D extends RawAsset {		
		/** Get width in pixels. 
		*/
		getPixelWidth() : number;		
		/** Get height of in pixels. 
		*/
		getPixelHeight() : number;		
		/** Get content size. 
		*/
		getContentSize() : Size;		
		/** Get content size in pixels. 
		*/
		getContentSizeInPixels() : Size;		
		/** Init with HTML element. 
		*/
		initWithElement(element : HTMLImageElement|HTMLCanvasElement) : void;		
		/** Intializes with a texture2d with data. 
		*/
		initWithData(data : any[], pixelFormat : number, pixelsWide : number, pixelsHigh : number, contentSize : Size) : boolean;		
		/** Initializes a texture from a UIImage object.
		Extensions to make it easy to create a CCTexture2D object from an image file.
		Note that RGBA type textures will have their alpha premultiplied - use the blending mode (gl.ONE, gl.ONE_MINUS_SRC_ALPHA). 
		*/
		initWithImage(uiImage : HTMLImageElement) : boolean;		
		/** HTMLElement Object getter. 
		*/
		getHtmlElementObj() : HTMLImageElement;		
		/** Check whether texture is loaded. 
		*/
		isLoaded() : boolean;		
		/** Handler of texture loaded event. 
		*/
		handleLoadedTexture(premultiplied? : boolean) : void;		
		/** Description of cc.Texture2D. 
		*/
		description() : string;		
		/** Release texture. 
		*/
		releaseTexture() : void;		
		/** Pixel format of the texture. 
		*/
		getPixelFormat() : number;		
		/** Whether or not the texture has their Alpha premultiplied,
		support only in WebGl rendering mode. 
		*/
		hasPremultipliedAlpha() : boolean;		
		/** Whether or not use mipmap, support only in WebGl rendering mode. 
		*/
		hasMipmaps() : boolean;		
		/** Sets the min filter, mag filter, wrap s and wrap t texture parameters. <br/>
		If the texture size is NPOT (non power of 2), then in can only use gl.CLAMP_TO_EDGE in gl.TEXTURE_WRAP_{S,T}.
		@param texParams texParams object or minFilter 
		*/
		setTexParameters(texParams : any|number, magFilter? : number, wrapS? : Texture2D.WrapMode, wrapT? : Texture2D.WrapMode) : void;		
		/** WebGLTexture Object. */
		name : WebGLTexture;		
		/** Pixel format of the texture. */
		pixelFormat : number;		
		/** Width in pixels. */
		pixelWidth : number;		
		/** Height in pixels. */
		pixelHeight : number;		
		/** Content width in points. */
		width : number;		
		/** Content height in points. */
		height : number;	
	}		
		/** <p>A class that implements a Texture Atlas. <br />
		Supported features: <br />
		The atlas file can be a PNG, JPG. <br />
		Quads can be updated in runtime <br />
		Quads can be added in runtime <br />
		Quads can be removed in runtime <br />
		Quads can be re-ordered in runtime <br />
		The TextureAtlas capacity can be increased or decreased in runtime.</p> */
		export class TextureAtlas {		
		constructor();		
		/** <p>Creates a TextureAtlas with an filename and with an initial capacity for Quads. <br />
		The TextureAtlas capacity can be increased in runtime. </p>
		Constructor of cc.TextureAtlas
		
		@example 
		```js
		--------------------------
		1. //creates a TextureAtlas with  filename
		var textureAtlas = new cc.TextureAtlas("res/hello.png", 3);
		
		2. //creates a TextureAtlas with texture
		var texture = cc.textureCache.addImage("hello.png");
		var textureAtlas = new cc.TextureAtlas(texture, 3);
		
		``` 
		*/
		TextureAtlas(fileName : string|Texture2D, capacity : number) : void;		
		/** Quantity of quads that are going to be drawn. 
		*/
		getTotalQuads() : number;		
		/** Quantity of quads that can be stored with the current texture atlas size. 
		*/
		getCapacity() : number;		
		/** Texture of the texture atlas. 
		*/
		getTexture() : Image;		
		/** Set texture for texture atlas. 
		*/
		setTexture(texture : Image) : void;		
		/** specify if the array buffer of the VBO needs to be updated. 
		*/
		setDirty(dirty : boolean) : void;		
		/** whether or not the array buffer of the VBO needs to be updated. 
		*/
		isDirty() : boolean;		
		/** Quads that are going to be rendered. 
		*/
		getQuads() : any[];		
		/**  
		*/
		setQuads(quads : any[]) : void;		
		/** <p>Initializes a TextureAtlas with a filename and with a certain capacity for Quads.<br />
		The TextureAtlas capacity can be increased in runtime.<br />
		WARNING: Do not reinitialize the TextureAtlas because it will leak memory. </p>
		
		@example 
		```js
		--------------------------------------------------
		var textureAtlas = new cc.TextureAtlas();
		textureAtlas.initWithTexture("hello.png", 3);
		
		``` 
		*/
		initWithFile(file : string, capacity : number) : boolean;		
		/** <p>Initializes a TextureAtlas with a previously initialized Texture2D object, and<br />
		with an initial capacity for Quads.<br />
		The TextureAtlas capacity can be increased in runtime.<br />
		WARNING: Do not reinitialize the TextureAtlas because it will leak memory</p>
		
		@example 
		```js
		---------------------------
		var texture = cc.textureCache.addImage("hello.png");
		var textureAtlas = new cc.TextureAtlas();
		textureAtlas.initWithTexture(texture, 3);
		
		``` 
		*/
		initWithTexture(texture : Image, capacity : number) : boolean;		
		/** <p>Updates a Quad (texture, vertex and color) at a certain index <br />
		index must be between 0 and the atlas capacity - 1 </p> 
		*/
		updateQuad(quad : V3F_C4B_T2F_Quad, index : number) : void;		
		/** <p>Inserts a Quad (texture, vertex and color) at a certain index<br />
		index must be between 0 and the atlas capacity - 1 </p> 
		*/
		insertQuad(quad : V3F_C4B_T2F_Quad, index : number) : void;		
		/** <p>
		     Inserts a c array of quads at a given index                                           <br />
		     index must be between 0 and the atlas capacity - 1                                    <br />
		     this method doesn't enlarge the array when amount + index > totalQuads                <br />
		</p> 
		*/
		insertQuads(quads : any[], index : number, amount : number) : void;		
		/** <p>Removes the quad that is located at a certain index and inserts it at a new index <br />
		This operation is faster than removing and inserting in a quad in 2 different steps</p> 
		*/
		insertQuadFromIndex(fromIndex : number, newIndex : number) : void;		
		/** <p>Removes a quad at a given index number.<br />
		The capacity remains the same, but the total number of quads to be drawn is reduced in 1 </p> 
		*/
		removeQuadAtIndex(index : number) : void;		
		/** Removes a given number of quads at a given index. 
		*/
		removeQuadsAtIndex(index : number, amount : number) : void;		
		/** <p>Removes all Quads. <br />
		The TextureAtlas capacity remains untouched. No memory is freed.<br />
		The total number of quads to be drawn will be 0</p> 
		*/
		removeAllQuads() : void;		
		/** <p>Resize the capacity of the CCTextureAtlas.<br />
		The new capacity can be lower or higher than the current one<br />
		It returns YES if the resize was successful. <br />
		If it fails to resize the capacity it will return NO with a new capacity of 0. <br />
		no used for js</p> 
		*/
		resizeCapacity(newCapacity : number) : boolean;		
		/** Used internally by CCParticleBatchNode                                    <br/>
		don't use this unless you know what you're doing. 
		*/
		increaseTotalQuadsWith(amount : number) : void;		
		/** Moves an amount of quads from oldIndex at newIndex. 
		*/
		moveQuadsFromIndex(oldIndex : number, amount : number, newIndex : number) : void;		
		/** Ensures that after a realloc quads are still empty                                <br/>
		Used internally by CCParticleBatchNode. 
		*/
		fillWithEmptyQuadsFromIndex(index : number, amount : number) : void;		
		/** <p>Draws n quads from an index (offset). <br />
		n + start can't be greater than the capacity of the atlas</p> 
		*/
		drawNumberOfQuads(n : number, start : number) : void;		
		/** Indicates whether or not the array buffer of the VBO needs to be updated. */
		dirty : boolean;		
		/** Image texture for cc.TextureAtlas. */
		texture : Image;		
		/** Quantity of quads that can be stored with the current texture atlas size. */
		capacity : number;		
		/** Quantity of quads that are going to be drawn. */
		totalQuads : number;		
		/** Quads that are going to be rendered. */
		quads : any[];	
	}		
		/** cc.textureCache is a singleton object, it's the global cache for cc.Texture2D */
		export class textureCache {		
		/** Description 
		*/
		description() : string;		
		/** Returns an already created texture. Returns null if the texture doesn't exist.
		
		@example 
		```js
		------------------
		var key = cc.textureCache.textureForKey("hello.png");
		
		``` 
		*/
		textureForKey(textureKeyName : string) : Texture2D;		
		/** Returns an already created texture. Returns null if the texture doesn't exist.
		
		@example 
		```js
		------------------
		var key = cc.textureCache.getTextureForKey("hello.png");
		
		``` 
		*/
		getTextureForKey(textureKeyName : string) : Texture2D;		
		/** 
		
		@example 
		```js
		---------
		var key = cc.textureCache.getKeyByTexture(texture);
		
		``` 
		*/
		getKeyByTexture(texture : Image) : string;		
		/** 
		
		@example 
		```js
		---------------
		var cacheTextureForColor = cc.textureCache.getTextureColors(texture);
		
		``` 
		*/
		getTextureColors(texture : Image) : any[];		
		/** <p>Purges the dictionary of loaded textures. <br />
		Call this method if you receive the "Memory Warning"  <br />
		In the short term: it will free some resources preventing your app from being killed  <br />
		In the medium term: it will allocate more resources <br />
		In the long term: it will be the same</p>
		
		@example 
		```js
		--------
		cc.textureCache.removeAllTextures();
		
		``` 
		*/
		removeAllTextures() : void;		
		/** Deletes a texture from the cache given a texture.
		
		@example 
		```js
		-----
		cc.textureCache.removeTexture(texture);
		
		``` 
		*/
		removeTexture(texture : Image) : void;		
		/** Deletes a texture from the cache given a its key name.
		
		@example 
		```js
		------
		cc.textureCache.removeTexture("hello.png");
		
		``` 
		*/
		removeTextureForKey(textureKeyName : string) : void;		
		/** <p>Returns a Texture2D object given an file image <br />
		If the file image was not previously loaded, it will create a new Texture2D <br />
		 object and it will return it. It will use the filename as a key.<br />
		Otherwise it will return a reference of a previously loaded image. <br />
		Supported image extensions: .png, .jpg, .gif</p>
		
		@example 
		```js
		----
		cc.textureCache.addImage("hello.png");
		
		``` 
		*/
		addImage(url : string, cb : Function, target : any) : Texture2D;		
		/** Cache the image data. 
		*/
		cacheImage(path : string, texture : Image|HTMLImageElement|HTMLCanvasElement) : void;		
		/** <p>Returns a Texture2D object given an UIImage image<br />
		If the image was not previously loaded, it will create a new Texture2D object and it will return it.<br />
		Otherwise it will return a reference of a previously loaded image<br />
		The "key" parameter will be used as the "key" for the cache.<br />
		If "key" is null, then a new texture will be created each time.</p> 
		*/
		addUIImage(image : HTMLImageElement|HTMLCanvasElement, key : string) : Texture2D;	
	}		
		/** <p>cc.AffineTransform class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.<br/>
		Please do not use its constructor directly, use cc.affineTransformMake alias function instead.
		</p> */
		export class AffineTransform {		
		/** Create a cc.AffineTransform object with all contents in the matrix 
		*/
		affineTransformMake(a : number, b : number, c : number, d : number, tx : number, ty : number) : AffineTransform;		
		/** Clone a cc.AffineTransform object from the specified transform 
		*/
		affineTransformClone(t : AffineTransform) : AffineTransform;		
		/** Apply the affine transformation on a point.
		@param point or x.
		@param transOrY transform matrix or y.
		@param t transform matrix or y. 
		*/
		pointApplyAffineTransform(point : Vec2|number, transOrY : AffineTransform|number, t : AffineTransform) : Vec2;		
		/** Apply the affine transformation on a size. 
		*/
		sizeApplyAffineTransform(size : Size, t : AffineTransform) : Size;		
		/** <p>Create a identity transformation matrix: <br/>
		[ 1, 0, 0, <br/>
		  0, 1, 0 ]</p> 
		*/
		affineTransformMakeIdentity() : AffineTransform;		
		/** <p>Create a identity transformation matrix: <br/>
		[ 1, 0, 0, <br/>
		  0, 1, 0 ]</p> 
		*/
		affineTransformIdentity() : AffineTransform;		
		/** Apply the affine transformation on a rect. 
		*/
		rectApplyAffineTransform(rect : Rect, anAffineTransform : AffineTransform) : Rect;		
		/** Create a new affine transformation with a base transformation matrix and a translation based on it.
		@param t The base affine transform object.
		@param tx The translation on x axis.
		@param ty The translation on y axis. 
		*/
		affineTransformTranslate(t : AffineTransform, tx : number, ty : number) : AffineTransform;		
		/** Create a new affine transformation with a base transformation matrix and a scale based on it.
		@param t The base affine transform object.
		@param sx The scale on x axis.
		@param sy The scale on y axis. 
		*/
		affineTransformScale(t : AffineTransform, sx : number, sy : number) : AffineTransform;		
		/** Create a new affine transformation with a base transformation matrix and a rotation based on it.
		@param aTransform The base affine transform object.
		@param anAngle The angle to rotate. 
		*/
		affineTransformRotate(aTransform : AffineTransform, anAngle : number) : AffineTransform;		
		/** Concatenate a transform matrix to another and return the result:<br/>
		t' = t1 * t2
		@param t1 The first transform object.
		@param t2 The transform object to concatenate. 
		*/
		affineTransformConcat(t1 : AffineTransform, t2 : AffineTransform) : AffineTransform;		
		/** Concatenate a transform matrix to another<br/>
		The results are reflected in the first matrix.<br/>
		t' = t1 * t2
		@param t1 The first transform object.
		@param t2 The transform object to concatenate. 
		*/
		affineTransformConcatIn(t1 : AffineTransform, t2 : AffineTransform) : AffineTransform;		
		/** Return true if an affine transform equals to another, false otherwise. 
		*/
		affineTransformEqualToTransform(t1 : AffineTransform, t2 : AffineTransform) : boolean;		
		/** Get the invert transform of an AffineTransform object. 
		*/
		affineTransformInvert(t : AffineTransform) : AffineTransform;	
	}		
		/** Representation of RGBA colors.
		
		Each color component is a floating point value with a range from 0 to 255.
		
		You can also use the convenience method <% crosslink cc.Color cc.Color %> to create a new Color. */
		export class Color extends ValueType {		
		/** 
		@param r red component of the color, default value is 0.
		@param g green component of the color, defualt value is 0.
		@param b blue component of the color, default value is 0.
		@param a alpha component of the color, default value is 255. 
		*/
		constructor(r? : number, g? : number, b? : number, a? : number);		
		WHITE : Color;		
		BLACK : Color;		
		TRANSPARENT : Color;		
		GRAY : Color;		
		RED : Color;		
		GREEN : Color;		
		BLUE : Color;		
		YELLOW : Color;		
		ORANGE : Color;		
		CYAN : Color;		
		MAGENTA : Color;		
		/** Clone a new color from the current color. 
		*/
		clone() : Color;		
		/**  
		*/
		equals(other : Color) : boolean;		
		/** 
		@param ratio the interpolation coefficient.
		@param out optional, the receiving vector. 
		*/
		lerp(to : Color, ratio : number, out? : Color) : Color;		
		toString() : string;		
		/** 
		@param red the new Red component. 
		*/
		setR(red : number) : Color;		
		/** 
		@param green the new Green component. 
		*/
		setG(green : number) : Color;		
		/** 
		@param blue the new Blue component. 
		*/
		setB(blue : number) : Color;		
		/** 
		@param alpha the new Alpha component. 
		*/
		setA(alpha : number) : Color;		
		/** 
		@param opt "rgba", "rgb", "#rgb" or "#rrggbb". 
		*/
		toCSS(opt : string) : string;		
		/** Clamp this color to make all components between 0 to 1. 
		*/
		clamp() : void;		
		/**  
		*/
		fromHEX(hexString : string) : Color;		
		/** 
		@param fmt "#rgb" or "#rrggbb". 
		*/
		toHEX(fmt : string) : string;		
		/** Convert to 24bit rgb value. 
		*/
		toRGBValue() : number;		
		/**  
		*/
		fromHSV(h : number, s : number, v : number) : Color;		
		toHSV() : any;		
		/** 
		@param r red, must be [0, 255].
		@param g red, must be [0, 255].
		@param b red, must be [0, 255]. 
		*/
		rgb2hsv(r : number, g : number, b : number) : any;		
		/**  
		*/
		hsv2rgb(h : number, s : number, v : number) : any;		
		/** The convenience method to create a new <% crosslink cc.Color color %>
		Alpha channel is optional. Default value is 255. 
		*/
		color(r? : number, g? : number, b? : number, a? : number) : Color;		
		/** returns true if both ccColor3B are equal. Otherwise it returns false. 
		*/
		colorEqual(color1 : Color, color2 : Color) : boolean;		
		/** convert a string of color for style to Color.
		e.g. "#ff06ff"  to : cc.color(255,6,255) 
		*/
		hexToColor(hex : string) : Color;		
		/** convert Color to a string of color for style.
		e.g.  cc.color(255,6,255)  to : "#ff06ff" 
		*/
		colorToHex(color : Color) : string;	
	}		
		/** A 2D rectangle defined by x, y position and width, height.
		
		see {% crosslink cc.Rect cc.rect %} */
		export class Rect extends ValueType {		
		/**  
		*/
		constructor(x? : number, y? : number, w? : number, h? : number);		
		/** Creates a rectangle from two coordinate values. 
		*/
		fromMinMax(v1 : Vec2, v2 : Vec2) : Rect;		
		/** Checks if rect contains.
		@param a Rect a
		@param b Rect b 
		*/
		contain(a : Rect, b : Rect) : number;		
		clone() : Rect;		
		/**  
		*/
		equals(other : Rect) : boolean;		
		/** 
		@param ratio the interpolation coefficient.
		@param out optional, the receiving vector. 
		*/
		lerp(to : Rect, ratio : number, out? : Rect) : Rect;		
		toString() : string;		
		xMin : number;		
		yMin : number;		
		xMax : number;		
		yMax : number;		
		center : number;		
		size : Size;		
		/**  
		*/
		intersects(rect : Rect) : void;		
		/** Returns true if the point inside this rectangle. 
		*/
		contains(point : Vec2) : void;		
		/** Returns true if the other rect totally inside this rectangle. 
		*/
		containsRect(rect : Rect) : void;		
		/** The convenience method to create a new Rect. 
		*/
		rect(x? : Number[]|number, y? : number, w? : number, h? : number) : Rect;		
		/** Check whether a rect's value equals to another. 
		*/
		rectEqualToRect(rect1 : Rect, rect2 : Rect) : boolean;		
		/** Check whether the rect1 contains rect2. 
		*/
		rectContainsRect(rect1 : Rect, rect2 : Rect) : boolean;		
		/** Returns the rightmost x-value of a rect. 
		*/
		rectGetMaxX(rect : Rect) : number;		
		/** Return the midpoint x-value of a rect. 
		*/
		rectGetMidX(rect : Rect) : number;		
		/** Returns the leftmost x-value of a rect. 
		*/
		rectGetMinX(rect : Rect) : number;		
		/** Return the topmost y-value of a rect. 
		*/
		rectGetMaxY(rect : Rect) : number;		
		/** Return the midpoint y-value of `rect'. 
		*/
		rectGetMidY(rect : Rect) : number;		
		/** Return the bottommost y-value of a rect. 
		*/
		rectGetMinY(rect : Rect) : number;		
		/** Check whether a rect contains a point. 
		*/
		rectContainsPoint(rect : Rect, point : Vec2) : boolean;		
		/** Check whether a rect intersect with another. 
		*/
		rectIntersectsRect(rectA : Rect, rectB : Rect) : boolean;		
		/** Check whether a rect overlaps another. 
		*/
		rectOverlapsRect(rectA : Rect, rectB : Rect) : boolean;		
		/** Returns the smallest rectangle that contains the two source rectangles. 
		*/
		rectUnion(rectA : Rect, rectB : Rect) : Rect;		
		/** Returns the overlapping portion of 2 rectangles. 
		*/
		rectUnion(rectA : Rect, rectB : Rect) : Rect;	
	}		
		/** cc.Size is the class for size object, please do not use its constructor to create sizes, use cc.size() alias function instead.
		It will be deprecated soon, please use cc.Vec2 instead */
		export class Size {		
		/** return a Size object with width = 0 and height = 0. */
		ZERO : Size;		
		clone() : Size;		
		/**  
		*/
		equals(other : Size) : boolean;		
		/** 
		@param ratio the interpolation coefficient.
		@param out optional, the receiving vector. 
		*/
		lerp(to : Rect, ratio : number, out? : Size) : Size;		
		toString() : string;		
		/** Helper function that creates a cc.Size.
		Please use cc.p or cc.v2 instead, it will soon replace cc.Size.
		@param w width or a size object
		@param h height
		
		@example 
		```js
		-----
		var size1 = cc.size();
		var size2 = cc.size(100,100);
		var size3 = cc.size(size2);
		var size4 = cc.size({width: 100, height: 100});
		
		``` 
		*/
		size(w : number|Size, h : number) : Size;		
		/** Check whether a point's value equals to another. 
		*/
		sizeEqualToSize(size1 : Size, size2 : Size) : boolean;	
	}		
		/** the device accelerometer reports values for each axis in units of g-force. */
		export class Acceleration {		
		constructor();		
		/**  
		*/
		Acceleration(x : number, y : number, z : number, timestamp : number) : Acceleration;	
	}		
		/** Blend Function used for textures. */
		export class BlendFunc {		
		constructor();		
		/** 
		@param src1 source blend function
		@param dst1 destination blend function 
		*/
		BlendFunc(src1 : number, dst1 : number) : BlendFunc;	
	}	
	/** !#en
	Enum for blend factor
	Refer to: http://www.andersriggelsen.dk/glblendfunc.php
	!#zh
	混合因子
	可参考: http://www.andersriggelsen.dk/glblendfunc.php */
	export enum BlendFactor {		
		ONE = 0,
		ZERO = 0,
		SRC_ALPHA = 0,
		SRC_COLOR = 0,
		DST_ALPHA = 0,
		DST_COLOR = 0,
		ONE_MINUS_SRC_ALPHA = 0,
		ONE_MINUS_SRC_COLOR = 0,
		ONE_MINUS_DST_ALPHA = 0,
		ONE_MINUS_DST_COLOR = 0,
		blendFuncDisable = 0,	
	}		
		/** Common usage:
		
		var fontDef = new cc.FontDefinition();
		fontDef.fontName = "Arial";
		fontDef.fontSize = 12;
		...
		
		OR using inline definition usefull for constructor injection
		
		var fontDef = new cc.FontDefinition({
		 fontName: "Arial",
		 fontSize: 12
		}); */
		export class FontDefinition {		
		constructor();		
		/** 
		@param properties (OPTIONAL) Allow inline FontDefinition 
		*/
		FontDefinition(properties : any) : FontDefinition;	
	}		
		/** undefined */
		export class WebGLColor {		
		constructor();		
		/**  
		*/
		WebGLColor(r : number, g : number, b : number, a : number, arrayBuffer : any[], offset : number) : WebGLColor;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class Vertex2F {		
		/**  
		*/
		Vertex2F(x : number, y : number, arrayBuffer : any[], offset : number) : Vertex2F;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class Vertex3F {		
		constructor();		
		/**  
		*/
		Vertex3F(x : number, y : number, z : number, arrayBuffer : any[], offset : number) : Vertex3F;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class Tex2F {		
		constructor();		
		/**  
		*/
		Tex2F(u : number, v : number, arrayBuffer : any[], offset : number) : Tex2F;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class Quad2 {		
		constructor();		
		/**  
		*/
		Quad2(tl: (x: number, y: number, arrayBuffer: any[], offset: number) => void, tr: (x: number, y: number, arrayBuffer: any[], offset: number) => void, bl: (x: number, y: number, arrayBuffer: any[], offset: number) => void, br: (x: number, y: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : Quad2;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** A 3D Quad. 4 * 3 floats */
		export class Quad3 {		
		/**  
		*/
		Quad3(bl1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, br1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, tl1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, tr1: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void) : Quad3;	
	}		
		/** undefined */
		export class V3F_C4B_T2F {		
		constructor();		
		/**  
		*/
		V3F_C4B_T2F(vertices: (x: number, y: number, z: number, arrayBuffer: any[], offset: number) => void, colors : Color, texCoords: (u: number, v: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V3F_C4B_T2F;		
		BYTES_PER_ELEMENT() : void;	
	}		
		/** undefined */
		export class V3F_C4B_T2F_Quad {		
		constructor();		
		/**  
		*/
		V3F_C4B_T2F_Quad(tl: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, bl: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, tr: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, br: (vertices: Vertex3F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V3F_C4B_T2F_Quad;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class V2F_C4B_T2F {		
		constructor();		
		/**  
		*/
		V2F_C4B_T2F(vertices: (x: number, y: number, arrayBuffer: any[], offset: number) => void, colors : Color, texCoords: (u: number, v: number, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V2F_C4B_T2F;		
		BYTES_PER_ELEMENT : number;	
	}		
		/** undefined */
		export class V2F_C4B_T2F_Triangle {		
		constructor();		
		/**  
		*/
		V2F_C4B_T2F_Triangle(a: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, b: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, c: (vertices: Vertex2F, colors: Color, texCoords: Tex2F, arrayBuffer: any[], offset: number) => void, arrayBuffer : any[], offset : number) : V2F_C4B_T2F_Triangle;	
	}		
		/** The base class of all value types. */
		export class ValueType {		
		constructor();		
		/** !#en This method returns an exact copy of current value.
		!#zh 克隆当前值，该方法返回一个新对象，新对象的值和原对象相等。 
		*/
		clone() : ValueType;		
		/** Compares this object with the other one. 
		*/
		equals(other : ValueType) : boolean;		
		toString() : string;		
		/** Linearly interpolates between this value to to value by ratio which is in the range [0, 1].
		When ratio = 0 returns this. When ratio = 1 return to. When ratio = 0.5 returns the average of this and to.
		@param to the to value
		@param ratio the interpolation coefficient 
		*/
		lerp(to : ValueType, ratio : number) : ValueType;	
	}		
		/** Representation of 2D vectors and points. */
		export class Vec2 extends ValueType {		
		constructor();		
		/** Constructor 
		*/
		Vec2(x? : number, y? : number) : void;		
		/** !#en clone a Vec2 value
		!#zh 克隆一个 Vec2 值 
		*/
		clone() : Vec2;		
		/** 
		@param newValue !#en new value to set. !#zh 要设置的新值 
		*/
		set(newValue: (x: number, y: number) => void) : Vec2;		
		/** 
		@param other Constructor 
		*/
		equals(other: (x: number, y: number) => void) : boolean;		
		toString() : string;		
		/** 
		@param to Constructor
		@param ratio the interpolation coefficient
		@param out optional, the receiving vector 
		*/
		lerp(to: (x: number, y: number) => void, ratio : number, out: (x: number, y: number) => void) : Vec2;		
		/** Adds this vector. If you want to save result to another vector, use add() instead.
		@param vector Constructor 
		*/
		addSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** Adds two vectors, and returns the new result.
		@param vector Constructor
		@param out optional, the receiving vector 
		*/
		add(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** Subtracts one vector from this. If you want to save result to another vector, use sub() instead.
		@param vector Constructor 
		*/
		subSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** Subtracts one vector from this, and returns the new result.
		@param vector Constructor
		@param out optional, the receiving vector 
		*/
		sub(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** Multiplies this by a number. If you want to save result to another vector, use mul() instead. 
		*/
		mulSelf(num : number) : Vec2;		
		/** Multiplies by a number, and returns the new result.
		@param out optional, the receiving vector 
		*/
		mul(num : number, out: (x: number, y: number) => void) : Vec2;		
		/** Multiplies two vectors.
		@param vector Constructor 
		*/
		scaleSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** Multiplies two vectors, and returns the new result.
		@param vector Constructor
		@param out optional, the receiving vector 
		*/
		scale(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** Divides by a number. If you want to save result to another vector, use div() instead.
		@param vector Constructor 
		*/
		divSelf(vector: (x: number, y: number) => void) : Vec2;		
		/** Divides by a number, and returns the new result.
		@param vector Constructor
		@param out optional, the receiving vector 
		*/
		div(vector: (x: number, y: number) => void, out: (x: number, y: number) => void) : Vec2;		
		/** Negates the components. If you want to save result to another vector, use neg() instead. 
		*/
		negSelf() : Vec2;		
		/** Negates the components, and returns the new result.
		@param out optional, the receiving vector 
		*/
		neg(out: (x: number, y: number) => void) : Vec2;		
		/** Dot product
		@param vector Constructor 
		*/
		dot(vector: (x: number, y: number) => void) : number;		
		/** Cross product
		@param vector Constructor 
		*/
		cross(vector: (x: number, y: number) => void) : number;		
		/** Returns the length of this vector. 
		*/
		mag() : number;		
		/** Returns the squared length of this vector. 
		*/
		magSqr() : number;		
		/** Make the length of this vector to 1. 
		*/
		normalizeSelf() : Vec2;		
		/** Returns this vector with a magnitude of 1.
		
		Note that the current vector is unchanged and a new normalized vector is returned. If you want to normalize the current vector, use normalizeSelf function.
		@param out optional, the receiving vector 
		*/
		normalize(out: (x: number, y: number) => void) : Vec2;		
		/** Get angle in radian between this and vector
		@param vector Constructor 
		*/
		angle(vector: (x: number, y: number) => void) : number;		
		/** Get angle in radian between this and vector with direction
		@param vector Constructor 
		*/
		signAngle(vector: (x: number, y: number) => void) : number;		
		/** rotate
		@param out optional, the receiving vector 
		*/
		rotate(radians : number, out: (x: number, y: number) => void) : Vec2;		
		/** rotate self 
		*/
		rotateSelf(radians : number) : Vec2;		
		/** return a Vec2 object with x = 1 and y = 1 */
		ONE : Vec2;		
		/** return a Vec2 object with x = 0 and y = 0 */
		ZERO : Vec2;		
		/** return a Vec2 object with x = 0 and y = 1 */
		up : Vec2;		
		/** return a Vec2 object with x = 1 and y = 0 */
		RIGHT : Vec2;	
	}	
	
	/****************************************************
	* Node
	*****************************************************/
	
	export module Node {		
		/** The event type supported by Node */
		export enum EventType {			
			TOUCH_START = 0,
			TOUCH_MOVE = 0,
			TOUCH_END = 0,
			TOUCH_CANCEL = 0,
			MOUSE_DOWN = 0,
			MOUSE_MOVE = 0,
			MOUSE_ENTER = 0,
			MOUSE_LEAVE = 0,
			MOUSE_UP = 0,
			MOUSE_WHEEL = 0,		
		}	
	}	
	
	/****************************************************
	* ParticleSystem
	*****************************************************/
	
	export module ParticleSystem {		
		/** !#en Enum for emitter modes
		!#zh 发射模式 */
		export enum EmitterMode {			
			GRAVITY = 0,
			RADIUS = 0,		
		}	
	}	
	
	/****************************************************
	* ParticleSystem
	*****************************************************/
	
	export module ParticleSystem {		
		/** !#en Enum for particles movement type.
		!#zh 粒子位置类型 */
		export enum PositionType {			
			FREE = 0,
			RELATIVE = 0,
			GROUPED = 0,		
		}	
	}	
	
	/****************************************************
	* TiledMap
	*****************************************************/
	
	export module TiledMap {		
		/** The orientation of tiled map */
		export enum Orientation {			
			ORTHO = 0,
			HEX = 0,
			ISO = 0,		
		}	
	}	
	
	/****************************************************
	* TiledMap
	*****************************************************/
	
	export module TiledMap {		
		/** The property type of tiled map */
		export enum Property {			
			NONE = 0,
			MAP = 0,
			LAYER = 0,
			OBJECTGROUP = 0,
			OBJECT = 0,
			TILE = 0,		
		}	
	}	
	
	/****************************************************
	* TiledMap
	*****************************************************/
	
	export module TiledMap {		
		/** The tile flags of tiled map */
		export enum TileFlag {			
			HORIZONTAL = 0,
			VERTICAL = 0,
			DIAGONAL = 0,
			FLIPPED_ALL = 0,
			FLIPPED_MASK = 0,		
		}	
	}	
	
	/****************************************************
	* Button
	*****************************************************/
	
	export module Button {		
		/** Enum for transition type */
		export enum Transition {			
			NONE = 0,
			COLOR = 0,
			SPRITE = 0,		
		}	
	}	
	
	/****************************************************
	* Component
	*****************************************************/
	
	export module Component {			
			/** Component will register a event to target component's handler.
			And it will trigger the handler when a certain event occurs. */
			export class EventHandler {			
			/** Event target */
			target : cc.Node;			
			/** Component name */
			component : string;			
			/** Event handler */
			handler : string;			
			/** Emit events with params 
			*/
			emitEvents(events : any[], params : any) : void;			
			/** Emit event with params 
			*/
			emit(params : any) : void;		
		}	
	}	
	
	/****************************************************
	* Label
	*****************************************************/
	
	export module Label {		
		/** !#en Enum for Overflow.
		!#zh Overflow 类型 */
		export enum Overflow {			
			NONE = 0,
			CLAMP = 0,
			SHRINK = 0,
			RESIZE_HEIGHT = 0,		
		}	
	}	
	
	/****************************************************
	* Label
	*****************************************************/
	
	export module Label {		
		/** !#en Enum for font type.
		!#zh Type 类型 */
		export enum Type {			
			TTF = 0,
			BMFont = 0,
			SystemFont = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for Layout type */
		export enum Type {			
			NONE = 0,
			HORIZONTAL = 0,
			VERTICAL = 0,
			GRID = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for Layout Resize Mode */
		export enum ResizeMode {			
			NONE = 0,
			CONTAINER = 0,
			CHILDREN = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for Grid Layout start axis direction. */
		export enum AxisDirection {			
			HORIZONTAL = 0,
			VERTICAL = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for vertical layout direction. */
		export enum VerticalDirection {			
			BOTTOM_TO_TOP = 0,
			TOP_TO_BOTTOM = 0,		
		}	
	}	
	
	/****************************************************
	* Layout
	*****************************************************/
	
	export module Layout {		
		/** Enum for horizontal layout direction. */
		export enum HorizontalDirection {			
			LEFT_TO_RIGHT = 0,
			RIGHT_TO_LEFT = 0,		
		}	
	}	
	
	/****************************************************
	* ProgressBar
	*****************************************************/
	
	export module ProgressBar {		
		/** Enum for ProgressBar mode */
		export enum Mode {			
			HORIZONTAL = 0,
			VERTICAL = 0,
			FILLED = 0,		
		}	
	}	
	
	/****************************************************
	* Scrollbar
	*****************************************************/
	
	export module Scrollbar {		
		/** Enum for Scrollbar direction */
		export enum Direction {			
			HORIZONTAL = 0,
			VERTICAL = 0,		
		}	
	}	
	
	/****************************************************
	* Sprite
	*****************************************************/
	
	export module Sprite {		
		/** !#en Enum for sprite type.
		!#zh Sprite 类型 */
		export enum SpriteType {			
			SIMPLE = 0,
			SLICED = 0,
			TILED = 0,
			FILLED = 0,		
		}	
	}	
	
	/****************************************************
	* Sprite
	*****************************************************/
	
	export module Sprite {		
		/** !#en Enum for fill type.
		!#zh 填充类型 */
		export enum FillType {			
			HORIZONTAL = 0,
			VERTICAL = 0,
			RADIAL = 0,		
		}	
	}	
	
	/****************************************************
	* Sprite
	*****************************************************/
	
	export module Sprite {		
		/** !#en Sprite Size can track trimmed size, raw size or none.
		!#zh 精灵尺寸调整模式 */
		export enum SizeMode {			
			CUSTOM = 0,
			TRIMMED = 0,
			RAW = 0,		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** The mouse event */
			export class EventMouse extends Event {			
			/** 
			@param eventType The mouse event type, UP, DOWN, MOVE, CANCELED
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(eventType : number, bubbles? : boolean);			
			/** Sets scroll data. 
			*/
			setScrollData(scrollX : number, scrollY : number) : void;			
			/** Returns the x axis scroll value. 
			*/
			getScrollX() : number;			
			/** Returns the y axis scroll value. 
			*/
			getScrollY() : number;			
			/** Sets cursor location. 
			*/
			setLocation(x : number, y : number) : void;			
			/** Returns cursor location. 
			*/
			getLocation() : Vec2;			
			/** Returns the current cursor location in screen coordinates. 
			*/
			getLocationInView() : Vec2;			
			/** Returns the previous touch location. 
			*/
			getPreviousLocation() : Vec2;			
			/** Returns the delta distance from the previous location to current location. 
			*/
			getDelta() : Vec2;			
			/** Returns the X axis delta distance from the previous location to current location. 
			*/
			getDeltaX() : number;			
			/** Returns the Y axis delta distance from the previous location to current location. 
			*/
			getDeltaY() : number;			
			/** Sets mouse button. 
			*/
			setButton(button : number) : void;			
			/** Returns mouse button. 
			*/
			getButton() : number;			
			/** Returns location X axis data. 
			*/
			getLocationX() : number;			
			/** Returns location Y axis data. 
			*/
			getLocationY() : number;		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** The touch event */
			export class EventTouch extends Event {			
			/** 
			@param touchArr The array of the touches
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(touchArr? : any[], bubbles? : boolean);			
			/** Returns event code. 
			*/
			getEventCode() : number;			
			/** Returns touches of event. 
			*/
			getTouches() : any[];			
			/** Sets touch location. 
			*/
			setLocation(x : number, y : number) : void;			
			/** Returns touch location. 
			*/
			getLocation() : Vec2;			
			/** Returns the current touch location in screen coordinates. 
			*/
			getLocationInView() : Vec2;			
			/** Returns the previous touch location. 
			*/
			getPreviousLocation() : Vec2;			
			/** Returns the start touch location. 
			*/
			getStartLocation() : Vec2;			
			/** Returns the id of cc.Touch. 
			*/
			getID() : number;			
			/** Returns the delta distance from the previous location to current location. 
			*/
			getDelta() : Vec2;			
			/** Returns the X axis delta distance from the previous location to current location. 
			*/
			getDeltaX() : number;			
			/** Returns the Y axis delta distance from the previous location to current location. 
			*/
			getDeltaY() : number;			
			/** Returns location X axis data. 
			*/
			getLocationX() : number;			
			/** Returns location Y axis data. 
			*/
			getLocationY() : number;		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** Focus change event for UI widget */
			export class EventFocus extends Event {			
			/** 
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(widgetLoseFocus : Widget, widgetGetFocus : Widget, bubbles? : boolean);		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** The acceleration event */
			export class EventAcceleration extends Event {			
			/** 
			@param acc The acceleration
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(acc : any, bubbles? : boolean);		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** The keyboard event */
			export class EventKeyboard extends Event {			
			/** 
			@param keyCode The key code of which triggered this event
			@param isPressed A boolean indicating whether the key have been pressed
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			constructor(keyCode : number, isPressed : boolean, bubbles? : boolean);		
		}	
	}	
	
	/****************************************************
	* Pipeline
	*****************************************************/
	
	export module Pipeline {			
			/** The downloader pipe, it can download several types of files:
			1. Text
			2. Image
			3. Script
			4. Audio
			All unknown type will be downloaded as plain text.
			You can pass custom supported types in the constructor. */
			export class Downloader {			
			/** Constructor of Downloader, you can pass custom supported types.
			@param extMap Custom supported types with corresponded handler
			
			@example 
			```js
			var downloader = new Downloader({
			     // This will match all url with `.scene` extension or all url with `scene` type
			     'scene' : function (url, callback) {}
			 });
			``` 
			*/
			Downloader(extMap : any) : void;			
			/** Add custom supported types handler or modify existing type handler.
			@param extMap Custom supported types with corresponded handler 
			*/
			addHandlers(extMap : any) : void;		
		}	
	}	
	
	/****************************************************
	* Pipeline
	*****************************************************/
	
	export module Pipeline {			
			/** The loader pipe, it can load several types of files:
			1. Images
			2. JSON
			3. Plist
			4. Audio
			5. Font
			6. Cocos Creator scene
			It will not interfere with items of unknown type.
			You can pass custom supported types in the constructor. */
			export class Loader {			
			/** Constructor of Loader, you can pass custom supported types.
			@param extMap Custom supported types with corresponded handler
			
			@example 
			```js
			var loader = new Loader({
			     // This will match all url with `.scene` extension or all url with `scene` type
			     'scene' : function (url, callback) {}
			 });
			``` 
			*/
			Loader(extMap : any) : void;			
			/** Add custom supported types handler or modify existing type handler.
			@param extMap Custom supported types with corresponded handler 
			*/
			addHandlers(extMap : any) : void;		
		}	
	}	
	
	/****************************************************
	* Event
	*****************************************************/
	
	export module Event {			
			/** The Custom event */
			export class EventCustom extends Event {			
			constructor();			
			/** 
			@param type The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
			@param bubbles A boolean indicating whether the event bubbles up through the tree or not 
			*/
			EventCustom(type : string, bubbles? : boolean) : EventCustom;			
			/** A reference to the detailed data of the event */
			detail : any;			
			/** Sets user data 
			*/
			setUserData(data : any) : void;			
			/** Gets user data 
			*/
			getUserData() : any;			
			/** Gets event name 
			*/
			getEventName() : string;		
		}	
	}	
	
	/****************************************************
	* Texture2D
	*****************************************************/
	
	export module Texture2D {			
			/** The texture wrap mode */
			export class WrapMode {			
			/** The constant variable equals gl.REPEAT for texture */
			REPEAT : number;			
			/** The constant variable equals gl.CLAMP_TO_EDGE for texture */
			CLAMP_TO_EDGE : number;			
			/** The constant variable equals gl.MIRRORED_REPEAT for texture */
			MIRRORED_REPEAT : number;		
		}	
	}	
	
	/****************************************************
	* Label
	*****************************************************/
	
	export module Label {		
		/** !#en Enum for text alignment.
		!#zh 文本对齐类型 */
		export enum TextAlignment {			
			LEFT = 0,
			CENTER = 0,
			RIGHT = 0,		
		}	
	}	
	
	/****************************************************
	* Label
	*****************************************************/
	
	export module Label {		
		/** !#en Enum for vertical text alignment.
		!#zh 文本垂直对齐类型 */
		export enum VerticalTextAlignment {			
			TOP = 0,
			CENTER = 0,
			BOTTOM = 0,		
		}	
	}
}
/** The global main namespace of Spine, all classes, functions, properties and constants of Spine are defined in this namespace */
declare module sp {	
	/** The official spine runtime.
	See http://en.esotericsoftware.com/spine-using-runtimes */
	export var spine : any;		
		/** The skeleton of Spine <br/>
		<br/>
		(Skeleton has a reference to a SkeletonData and stores the state for skeleton instance,
		which consists of the current pose's bone SRT, slot colors, and which slot attachments are visible. <br/>
		Multiple skeletons can use the same SkeletonData which includes all animations, skins, and attachments.) <br/> */
		export class Skeleton extends cc._RendererUnderSG {		
		constructor();		
		/** The skeleton data contains the skeleton information (bind pose bones, slots, draw order,
		attachments, skins, etc) and animations but does not hold any state.
		Multiple skeletons can share the same skeleton data. */
		skeletonData : SkeletonData;		
		/** The name of default skin. */
		defaultSkin : string;		
		/** The name of default animation. */
		defaultAnimation : string;		
		/** The name of current playing animation. */
		animation : string;		
		_defaultSkinIndex : number;		
		loop : boolean;		
		/** The time scale of this skeleton. */
		timeScale : number;		
		/** Indicates whether open debug slots. */
		debugSlots : boolean;		
		/** Indicates whether open debug bones. */
		debugBones : boolean;		
		/** Sets the bones and slots to the setup pose. 
		*/
		setToSetupPose() : void;		
		/** Sets the bones to the setup pose, using the values from the `BoneData` list in the `SkeletonData`. 
		*/
		setBonesToSetupPose() : void;		
		/** Sets the slots to the setup pose, using the values from the `SlotData` list in the `SkeletonData`. 
		*/
		setSlotsToSetupPose() : void;		
		/** Finds a bone by name. This does a string comparison for every bone. 
		*/
		findBone(boneName : string) : spine.Bone;		
		/** Finds a slot by name. This does a string comparison for every slot. 
		*/
		findSlot(slotName : string) : spine.Slot;		
		/** Finds a skin by name and makes it the active skin. This does a string comparison for every skin. Note that setting the skin does not change which attachments are visible. 
		*/
		setSkin(skinName : string) : spine.Skin;		
		/** Returns the attachment for the slot and attachment name. The skeleton looks first in its skin, then in the skeleton data’s default skin. 
		*/
		getAttachment(slotName : string, attachmentName : string) : spine.RegionAttachment;		
		/** Sets the attachment for the slot and attachment name. The skeleton looks first in its skin, then in the skeleton data’s default skin. 
		*/
		setAttachment(slotName : string, attachmentName : string) : void;		
		/** Sets skeleton data to sp.Skeleton. 
		*/
		setSkeletonData(skeletonData : spine.SkeletonData, ownsSkeletonData : spine.SkeletonData) : void;		
		/** Sets animation state data. 
		*/
		setAnimationStateData(stateData : spine.AnimationStateData) : void;		
		/** Mix applies all keyframe values, interpolated for the specified time and mixed with the current values. 
		*/
		setMix(fromAnimation : string, toAnimation : string, duration : number) : void;		
		/** Sets event listener. 
		*/
		setAnimationListener(target : any, callback : Function) : void;		
		/** Set the current animation. Any queued animations are cleared. 
		*/
		setAnimation(trackIndex : number, name : string, loop : boolean) : spine.TrackEntry;		
		/** Adds an animation to be played delay seconds after the current or last queued animation. 
		*/
		addAnimation(trackIndex : number, name : string, loop : boolean, delay? : number) : spine.TrackEntry;		
		/** Returns track entry by trackIndex. 
		*/
		getCurrent(trackIndex : void) : spine.TrackEntry;		
		/** Clears all tracks of animation state. 
		*/
		clearTracks() : void;		
		/** Clears track of animation state by trackIndex. 
		*/
		clearTrack(trackIndex : number) : void;		
		/** Set the start event listener. 
		*/
		setStartListener(listener : Function) : void;		
		/** Set the end event listener. 
		*/
		setEndListener(listener : Function) : void;	
	}		
		/** The skeleton data of spine. */
		export class SkeletonData extends cc.Asset {		
		/** See http://en.esotericsoftware.com/spine-json-format */
		skeletonJson : any;		
		atlasText : string;		
		textures : cc.Texture2D;		
		/** A scale can be specified on the JSON or binary loader which will scale the bone positions,
		image sizes, and animation translations.
		This can be useful when using different sized images than were used when designing the skeleton
		in Spine. For example, if using images that are half the size than were used in Spine,
		a scale of 0.5 can be used. This is commonly used for games that can run with either low or high
		resolution texture atlases. */
		scale : number;		
		/** Get the included SkeletonData used in spine runtime. 
		*/
		getRuntimeData(quiet? : boolean) : spine.SkeletonData;	
	}	
	/** The event type of spine skeleton animation. */
	export enum AnimationEventType {		
		START = 0,
		END = 0,
		COMPLETE = 0,
		EVENT = 0,	
	}
}
/** This module provides some JavaScript utilities. */
declare module cc.js {	
	/** Check the obj whether is function or not 
	*/
	export function isFunction(obj : any) : boolean;	
	/** Check the obj whether is number or not 
	*/
	export function isNumber(obj : any) : boolean;	
	/** Check the obj whether is string or not 
	*/
	export function isString(obj : any) : boolean;	
	/** Check the obj whether is array or not 
	*/
	export function isArray(obj : any) : boolean;	
	/** Check the obj whether is undefined or not 
	*/
	export function isUndefined(obj : any) : boolean;	
	/** Check the obj whether is object or not 
	*/
	export function isObject(obj : any) : boolean;	
	/** copy all properties not defined in obj from arguments[1...n]
	@param obj object to extend its properties
	@param sourceObj source object to copy properties from 
	*/
	export function addon(obj : any, sourceObj : any) : any;	
	/** copy all properties from arguments[1...n] to obj 
	*/
	export function mixin(obj : any, sourceObj : any) : any;	
	/** Derive the class from the supplied base class.
	Both classes are just native javascript constructors, not created by cc.Class, so
	usually you will want to inherit using {% crosslink cc.Class cc.Class %} instead.
	@param base the baseclass to inherit 
	*/
	export function extend(cls : Function, base : Function) : Function;	
	/** Removes all enumerable properties from object 
	*/
	export function clear(obj : any) : void;	
	/** Get property descriptor in object and all its ancestors 
	*/
	export function getPropertyDescriptor(obj : any, name : string) : any;	
	/** Get class name of the object, if object is just a {} (and which class named 'Object'), it will return null.
	(modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)
	@param obj instance or constructor 
	*/
	export function getClassName(obj : any|Function) : string;	
	/** Register the class by specified name manually 
	*/
	export function setClassName(className : string, constructor : Function) : void;	
	/** Unregister a class from fireball.
	
	If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
	Please note that its still your responsibility to free other references to the class.
	@param constructor the class you will want to unregister, any number of classes can be added 
	*/
	export function unregisterClass(constructor : Function) : void;	
	/** Get the registered class by name 
	*/
	export function getClassByName(classname : string) : Function;	
	/** Define get set accessor, just help to call Object.defineProperty(...) 
	*/
	export function getset(obj : any, prop : string, getter : Function, setter : Function, enumerable? : boolean) : void;	
	/** Define get accessor, just help to call Object.defineProperty(...) 
	*/
	export function get(obj : any, prop : string, getter : Function, enumerable? : boolean) : void;	
	/** Define set accessor, just help to call Object.defineProperty(...) 
	*/
	export function set(obj : any, prop : string, setter : Function, enumerable? : boolean) : void;	
	/** Defines a polyfill field for obsoleted codes.
	@param obj YourObject or YourClass.prototype
	@param obsoleted "OldParam" or "YourClass.OldParam"
	@param newPropName "NewParam" 
	*/
	export function obsolete(obj : any, obsoleted : string, newPropName : string, writable? : boolean) : void;	
	/** Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
	@param obj YourObject or YourClass.prototype
	@param objName "YourObject" or "YourClass" 
	*/
	export function obsoletes(obj : any, objName : any, props : any, writable? : boolean) : void;	
	/** A string tool to construct a string with format string.
	for example:
	     cc.js.formatStr("a: %d, b: %b", a, b);
	     cc.js.formatStr(a, b, c); 
	*/
	export function formatStr() : string;		
		/** undefined */
		export class array {		
		/** Removes the first occurrence of a specific object from the array. 
		*/
		remove(array : any[], value : any) : boolean;		
		/** Removes the array item at the specified index. 
		*/
		removeAt(array : any[], index : number) : void;		
		/** Determines whether the array contains a specific value. 
		*/
		contains(array : any[], value : any) : boolean;		
		/** Verify array's Type 
		*/
		verifyType(array : any[], type : Function) : boolean;		
		/** Removes from array all values in minusArr. For each Value in minusArr, the first matching instance in array will be removed.
		@param array Source Array
		@param minusArr minus Array 
		*/
		removeArray(array : any[], minusArr : any[]) : void;		
		/** Inserts some objects at index 
		*/
		appendObjectsAt(array : any[], addObjs : any[], index : number) : any[];		
		/** Copy an array's item to a new array (its performance is better than Array.slice) 
		*/
		copy(array : any[]) : any[];		
		/** Exact same function as Array.prototype.indexOf.
		HACK: ugliy hack for Baidu mobile browser compatibility,
		stupid Baidu guys modify Array.prototype.indexOf for all pages loaded,
		their version changes strict comparison to non-strict comparison,
		it also ignores the second parameter of the original API,
		and this will cause event handler enter infinite loop.
		Baidu developers, if you ever see this documentation,
		here is the standard: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
		Seriously !
		@param searchElement Element to locate in the array.
		@param fromIndex The index to start the search at 
		*/
		indexOf(searchElement : any, fromIndex? : number) : number;	
	}
}
/** The `core-level` debugger utils, when you turn on the debugger,
it actually run a [node-inspector](https://github.com/node-inspector/node-inspector)
process in the low-level, and you can use your chrome browser debug the core module. */
declare module Editor.Debugger {	
	/** Toggle on or off the `core-level` debugger 
	*/
	export function toggle() : void;	
	/** Turn on the `core-level` debugger 
	*/
	export function open() : void;	
	/** Turn off the `core-level` debugger 
	*/
	export function close() : void;
}
/** Page Level Editor */
declare module Editor {	
	/** Log the normal message and show on the console.
	The method will send ipc message `console:log` to all windows.
	@param args whatever arguments the message needs 
	*/
	export function log(args? : any[]) : void;	
	/** Log the success message and show on the console
	The method will send ipc message `console:success` to all windows.
	@param args whatever arguments the message needs 
	*/
	export function success(args? : any[]) : void;	
	/** Log the failed message and show on the console
	The method will send ipc message `console:failed` to all windows.
	@param args whatever arguments the message needs 
	*/
	export function failed(args? : any[]) : void;	
	/** Log the info message and show on the console
	The method will send ipc message `console:info` to all windows.
	@param args whatever arguments the message needs 
	*/
	export function info(args? : any[]) : void;	
	/** Log the warnning message and show on the console,
	it also shows the call stack start from the function call it.
	The method will send ipc message `console:warn` to all windows.
	@param args whatever arguments the message needs 
	*/
	export function warn(args? : any[]) : void;	
	/** Log the error message and show on the console,
	it also shows the call stack start from the function call it.
	The method will sends ipc message `console:error` to all windows.
	@param args whatever arguments the message needs 
	*/
	export function error(args? : any[]) : void;	
	/** Log the fatal message and show on the console,
	the app will quit immediately after that.
	@param args whatever arguments the message needs 
	*/
	export function fatal(args? : any[]) : void;	
	/** Connect to console panel. Once the console connected, all logs will kept in `core-level` and display
	on the console panel in `page-level`. 
	*/
	export function connectToConsole() : void;	
	/** Clear the logs 
	*/
	export function clearLog() : void;	
	/** Load profile via `name` and `type`, if no profile found, it will use the `defaultProfile` and save it to the disk.
	You must register your profile path with `type` via {@link Editor.registerProfilePath} before you
	can use it. The Editor Framework will search a profile under your register path with the `name`.
	@param name The name of the profile.
	@param type The type of the profile, make sure you register the type via {@link Editor.registerProfilePath}.
	@param defaultProfile The default profile to use if the profile is not found.
	
	@example 
	```js
	// register a project profile
	Editor.registerProfilePath( 'project', '~/foo/bar');
	
	// load the profile at ~/foo/bar/foobar.json
	let foobarProfile = Editor.loadProfile( 'foobar', 'project', {
	  foo: 'foo',
	  bar: 'bar',
	});
	
	// change and save your profile
	foobarProfile.foo = 'hello foo';
	foobarProfile.save();
	
	``` 
	*/
	export function loadProfile(name : string, type : string, defaultProfile : any) : any;	
	/** Search and load all packages from the path you registerred
	{{#crossLink "Editor.registerPackagePath"}}{{/crossLink}} 
	*/
	export function loadAllPackages() : void;	
	/** Require module through url path 
	*/
	export function require(url : string) : void;	
	/** Spawn child process that start from console 
	*/
	export function execSpawn(command : string, options : any) : void;	
	/** Watch packages 
	*/
	export function watchPackages() : void;	
	/** Register profile type with the path you provide.
	{{#crossLink "Editor.loadProfile"}}{{/crossLink}}
	@param type The type of the profile you want to register.
	@param path The path for the register type. 
	*/
	export function registerProfilePath(type : string, path : string) : void;	
	/** Register a path, when loading packages, it will search the path you registerred.
	{{#crossLink "Editor.loadPackages"}}{{/crossLink}}
	@param path A absolute path for searching your packages. 
	*/
	export function registerDefaultLayout(path : string) : void;	
	/** init editor during App.init
	@param opts options
	@param profile profile type to path
	@param package-search-path package search path
	@param main-menu a function return the new main-menu template
	@param panel-window panel window url
	@param layout default layout file
	@param selection selection type
	@param i18n i18n phrases 
	*/
	export function init(opts : any, profile : any, package-search-path : any[], main-menu : Function, panel-window : string, layout : string, selection : any[], i18n : any[]) : void;	
	/** reset editor 
	*/
	export function reset() : void;	
	/** The Editor.App is your app.js module. Read more details in
	[Define your application](https://github.com/cocos-creator/editor-framework/blob/master/docs/manual/define-your-app.md). */
	export var App : any;	
	/** The name of your app. It is defined in the `name` field in package.json */
	export var name : string;	
	/** your app version */
	export var version : string;	
	/** The current app.js running directory. */
	export var path : string;	
	/** Your application's data path. Usually it is `~/.{your-app-name}` */
	export var home : string;	
	/** Extends Editor.App */
	export var extend : Function;	
	/** versions of your app and submodules */
	export var versions : any;	
	/** The editor framework module path. Usually it is `{your-app}/editor-framework/` */
	export var frameworkPath : string;	
	/** Send `args...` to windows except the excluded
	@param excluded A [WebContents](https://github.com/atom/electron/blob/master/docs/api/browser-window.md#class-webcontents) object.
	@param args whatever arguments the message needs 
	*/
	export function _main2renderersExclude(excluded : any, args? : any[]) : void;	
	/** Send `message` with `...args` to all opened windows asynchronously. The renderer process
	can handle it by listening to the message through the `Electron.ipcRenderer` module.
	@param args whatever arguments the message needs
	
	@example 
	```js
	In `core-level`:
	
	```js
	Editor.sendToWindows('foo:bar', 'Hello World!');
	```
	
	In `page-level`:
	
	```html
	// index.html
	<html>
	<body>
	  <script>
	    require('ipc').on('foo:bar', function(text) {
	      console.log(text);  // Prints "Hello World!"
	    });
	  </script>
	</body>
	</html>
	
	``` 
	*/
	export function sendToWindows(message : string, args? : any[]) : void;	
	/** Send `message` with `...args` to main process asynchronously.
	@param args whatever arguments the message needs 
	*/
	export function sendToCore(message : string, args? : any[]) : void;	
	/** Send `message` with `...args` to all opened window and to main process asynchronously.
	@param args whatever arguments the message needs 
	*/
	export function sendToAll(message : string, args? : any[]) : void;	
	/** Send `message` with `...args` to specific panel asynchronously.
	@param args whatever arguments the message needs
	
	@example 
	```js
	Editor.sendToPanel( 'package.panel', 'foo-bar', 'foo', 'bar' );
	
	``` 
	*/
	export function sendToPanel(panelID : string, message : string, args? : any[]) : void;	
	/** Send `message` with `...args` to main window asynchronously.
	@param args whatever arguments the message needs 
	*/
	export function sendToMainWindow(message : string, args? : any[]) : void;	
	/** Send `message` with `...args` to main process asynchronously and wait for the reply.
	@param args whatever arguments the request needs
	@param callback the callback used to handle replied arguments 
	*/
	export function sendRequestToCore(message : string, args? : any[], callback : Function) : number;	
	/** Cancel request sent to core by sessionId 
	*/
	export function cancelRequestToCore(sessionId : number) : void;	
	/** Convert a url by its protocol to a filesystem path. This function is useful when you try to
	get some internal file. You can use {@link Editor.registerProtocol} to register and map your filesystem
	path to url. By default, Editor Framework register `editor-framework://` and `app://` protocol.
	
	@example 
	```js
	// it will return "{your-app-path}/foobar/foobar.js"
	Editor.url('app://foobar/foobar.js');
	
	``` 
	*/
	export function url(url : string) : void;	
	/** Register a protocol so that {@link Editor.url} can use it to convert an url to the filesystem path.
	The `fn` accept an url Object via [url.parse](https://iojs.org/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost)
	
	@example 
	```js
	const Path = require('path');
	
	let _url2path = base => {
	  return urlInfo => {
	    if ( urlInfo.pathname ) {
	      return Path.join( base, urlInfo.host, urlInfo.pathname );
	    }
	    return Path.join( base, urlInfo.host );
	  };
	};
	
	Editor.registerProtocol('editor-framework', _url2path(Editor.frameworkPath));
	
	``` 
	*/
	export function registerProtocol(protocol : string, fn : Function) : void;	
	/** Require module through url path 
	*/
	export function require(url : string) : void;	
	/** Log the normal message and show on the console.
	The method will send ipc message `console:log` to core.
	@param arg whatever arguments the message needs 
	*/
	export function log(arg? : any[]) : void;	
	/** Send message with `...args` to main process synchronized and return a result which is responded from main process
	@param args whatever arguments the message needs 
	*/
	export function sendToCoreSync(message : string, args? : any[]) : any;	
	/** Send message with `...args` to main process asynchronously.
	@param args whatever arguments the message needs 
	*/
	export function sendToCore(message : string, args? : any[]) : void;	
	/** Send message with `...args` to main process by package name and the short name of the message
	@param pkgName the package name
	@param message the short name of the message
	@param args whatever arguments the message needs 
	*/
	export function sendToPackage(pkgName : string, message : string, args? : any[]) : void;	
	/** Broadcast message with `...args` to all opened window.
	The page is so called as atom shell's web side. Each application window is an independent page and has its own JavaScript context.
	@param args whatever arguments the message needs
	@param options you can indicate the options such as Editor.selfExcluded 
	*/
	export function sendToWindows(message : string, args? : any[], options? : any) : void;	
	/** Broadcast message with `...args` to main window.
	The page is so called as atom shell's web side. Each application window is an independent page and has its own JavaScript context.
	@param args whatever arguments the message needs 
	*/
	export function sendToMainWindow(message : string, args? : any[]) : void;	
	/** Broadcast message with `...args` to all opened windows and main process
	@param args whatever arguments the message needs
	@param options you can indicate the options such as Editor.selfExcluded 
	*/
	export function sendToAll(message : string, args? : any[], options? : any) : void;	
	/** Send message with `...args` to specific panel
	@param panelID the panel id
	@param arg whatever arguments the message needs 
	*/
	export function sendToPanel(panelID : string, message : string, arg? : any[]) : void;	
	/** Send message with `...args` to main process, and wait for the reply
	@param args whatever arguments the request needs
	@param callback the callback used to handle replied arguments 
	*/
	export function sendRequestToCore(message : string, args? : any[], callback : Function) : number;	
	/** Cancel request sent to core by sessionId 
	*/
	export function cancelRequestToCore() : void;	
	/** Send message with `...args` to main process, and waiting for reply
	@param arg whatever arguments the request needs
	@param reply the callback used to handle replied arguments
	@param timeout timeout for the reply, if timeout = -1, it will never get expired 
	*/
	export function waitForReply(message : string, arg? : any[], reply : Function, timeout? : number) : number;	
	/** Cancel wait for reply by message and sessionId 
	*/
	export function cancelWaitForReply(message : string, sessionId : number) : void;	
	/** The AssetDB instance */
	export var assetdb : AssetDB;		
		/** undefined */
		export class Menu {		
		constructor();		
		/** 
		@param template Menu template for initialize. The template take the options of
		Electron's [Menu Item](https://github.com/atom/electron/blob/master/docs/api/menu-item.md)
		plus the following properties.
		@param webContents A [WebContents](https://github.com/atom/electron/blob/master/docs/api/browser-window.md#class-webcontents) object. 
		*/
		Menu(template: (path: string, message: string, command: string, params: any[], panel: string, dev: string) => void, webContents? : any) : Menu;		
		/** De-reference the native menu. 
		*/
		dispose() : void;		
		/** Reset the menu from the template. 
		*/
		reset(template : any[]|any) : void;		
		/** Clear all menu item in it. 
		*/
		clear() : void;		
		/** Build a template into menu item and add it to path
		@param path A menu path
		
		@example 
		```js
		let editorMenu = new Editor.Menu();
		editorMenu.add( 'foo/bar', {
		  label: foobar,
		  message: 'foobar:say',
		  params: ['foobar: hello!']
		});
		
		// you can also create menu without label
		// it will add menu to foo/bar where bar is the menu-item
		let editorMenu = new Editor.Menu();
		editorMenu.add( 'foo/bar/foobar', {
		  message: 'foobar:say',
		  params: ['foobar: hello!']
		});
		
		``` 
		*/
		add(path : string, template : any[]|any) : void;		
		/** Remove menu item at path.
		@param path A menu path 
		*/
		remove(path : string) : void;		
		/** Set menu options at path.
		@param path A menu path 
		*/
		set(path : string, options: (icon: NativeImage, enabled: boolean, visible: boolean, checked: boolean) => void) : void;		
		/** Convert the menu template to process additional keyword we added for Electron.
		If webContents provided, the `template.message` will send to the target webContents.
		@param webContents A [WebContents](https://github.com/atom/electron/blob/master/docs/api/browser-window.md#class-webcontents) object. 
		*/
		convert(template : any[]|any, webContents? : any) : void;		
		/** 
		@param name name of the register menu
		@param fn a function returns the menu template
		@param force force to register a menu even it was registered before. 
		*/
		register(name : string, fn : Function, force? : boolean) : void;		
		/** 
		@param name name of the registerred menu 
		*/
		unregister(name : string) : void;		
		/** 
		@param name Name of the register menu 
		*/
		getMenu(name : string) : void;		
		/**  
		*/
		walk(template : any[]|any, fn : Function) : void;	
	}		
		/** Window class for operating editor window */
		export class Window extends EventEmitter {		
		/** 
		@param name The window name
		@param options The options use [BrowserWindow's options](https://github.com/atom/electron/blob/master/docs/api/browser-window.md#new-browserwindowoptions)
		with the following additional field: 
		*/
		constructor(name : string, options: (windowType: string, save: boolean) => void);		
		/** load page by url, and send argv in query property of the url. The page level will parse
		the argv when the page is ready and save it in Editor.argv in page level 
		*/
		load(url : string, argv : any) : void;		
		/** Show the window 
		*/
		show() : void;		
		/** Close the window 
		*/
		close() : void;		
		/** Focus on the window 
		*/
		focus() : void;		
		/** Minimize the window 
		*/
		minimize() : void;		
		/** Restore the window 
		*/
		restore() : void;		
		/** Open the dev-tools 
		*/
		openDevTools(options: (detach: boolean) => void) : void;		
		/** Try to adjust the window to fit the position and size we give 
		*/
		adjust(x : number, y : number, w : number, h : number) : void;		
		/** Commit the current window state 
		*/
		commitWindowState(layoutInfo : any) : void;		
		/** Restore window's position and size from the `local` profile `layout.windows.json` 
		*/
		restorePositionAndSize() : void;		
		/** Send ipc messages to page
		@param arg whatever arguments the request needs 
		*/
		sendToPage(message : string, arg? : any[]) : void;		
		/** Send request to page and wait for the reply
		[Editor.Window.cancelRequestToPage]
		@param arg whatever arguments the message needs
		@param reply the callback used to handle replied arguments 
		*/
		sendRequestToPage(message : string, arg? : any[], reply : Function) : number;		
		/** Cancel request via sessionId 
		*/
		cancelRequestToPage(sessionId : number) : void;		
		/** Find window by name or by BrowserWindow instance 
		*/
		find(param : string|BrowserWindow|BrowserWindow.webContents) : Editor.Window;		
		/** Add an editor window 
		*/
		addWindow(win : Editor.Window) : void;		
		/** Remove an editor window 
		*/
		removeWindow(win : Editor.Window) : void;		
		/** Commit all opened window states 
		*/
		commitWindowStates() : void;		
		/** Save current windows' states to profile `layout.windows.json` at `local` 
		*/
		saveWindowStates() : void;		
		/** If this is a main window */
		isMainWindow : boolean;		
		/** If the window is focused */
		isFocused : boolean;		
		/** If the window is minimized */
		isMinimized : boolean;		
		/** If the window is loaded */
		isLoaded : boolean;	
	}		
		/** Worker class for operating worker */
		export class Worker {		
		/** 
		@param name The worker name 
		*/
		constructor(name : string, options: (workerType: string, url: string) => void);	
	}
}
/** Package module for manipulating packages */
declare module Editor.Package {	
	/** Load a package at path
	@param path An absolute path point to a package folder
	@param opts Options
	@param cb Callback when finish loading 
	*/
	export function load(path : string, opts: (build: boolean) => void, cb : Function) : void;	
	/** Unload a package at path
	@param path An absolute path point to a package folder
	@param cb Callback when finish unloading 
	*/
	export function unload(path : string, cb : Function) : void;	
	/** Reload a package at path
	@param path An absolute path point to a package folder
	@param opts Options
	@param cb Callback when finish reloading 
	*/
	export function reload(path : string, opts: (rebuild: boolean) => void, cb : Function) : void;	
	/** Find and get panel info via panelID, the panel info is the json object
	that defined in `panels.{panel-name}` in your package.json 
	*/
	export function panelInfo(panelID : string) : any;	
	/** Find and get package info via path, the package info is the json object of your package.json file
	@param path The path can be any files in this package 
	*/
	export function packageInfo(path : string) : any;	
	/** Return the path of the package by name 
	*/
	export function packagePath(packageName : string) : string;	
	/** Build package at path 
	*/
	export function build(path : string, callback : Function) : string;	
	/** Add package search path 
	*/
	export function addPath(path : string|any[]) : void;	
	/** Remove search path from package search path list 
	*/
	export function removePath(path : string) : void;	
	/** Reset path 
	*/
	export function resetPath() : void;	
	/** Find package by name in package search path list
	@param name package name 
	*/
	export function find(name : string) : string;	
	/** Return package search path list */
	export var paths : any[];
}
/** Panel module for operating specific panel */
declare module Editor.Panel {	
	/** Open a panel and pass argv to it. The argv will be sent as argument in `panel:run` message in page-level
	@param panelID a panelID
	@param argv argument store as key-value table, which will pass later 
	*/
	export function open(panelID : string, argv : any) : void;	
	/** Close a panel via panelID
	@param panelID a panelID 
	*/
	export function close(panelID : string) : void;	
	/** Find and return an editor window that contains the panelID
	@param panelID a panelID 
	*/
	export function findWindow(panelID : string) : Editor.Window;	
	/** Find and return editor window list that contains panel defined in package via packageName 
	*/
	export function findWindows(packageName : string) : Editor.Window[];	
	/** Find and return panel ID list that contains panel defined in package via packageName 
	*/
	export function findPanels(packageName : string) : string[];	
	/** Close all panels defined in package via packageName 
	*/
	export function closeAll(packageName : string) : void;
}
/** The main menu module for manipulating main menu items */
declare module Editor.MainMenu {	
	/** Revert to default setup 
	*/
	export function _revert() : void;	
	/** Apply main menu changes 
	*/
	export function apply() : void;	
	/** Reset main menu to its default template 
	*/
	export function reset() : void;	
	/** Build a template into menu item and add it to path
	@param path A menu path 
	*/
	export function add(path : string, template : any[]|any) : void;	
	/** Build a template into menu item and add it to path
	@param path A menu path 
	*/
	export function add(path : string, template : any[]|any) : void;	
	/** Remove menu item at path.
	@param path A menu path 
	*/
	export function remove(path : string) : void;	
	/** Set menu options at path.
	@param path A menu path 
	*/
	export function set(path : string, options: (icon: NativeImage, enabled: boolean, visible: boolean, checked: boolean) => void) : void;	
	/** Get main menu instance for debug purpose */
	export var menu : void;
}

/****************************************************
* AssetDB
*****************************************************/

declare module AssetDB {	
	/** Return uuid by url. if uuid not found, it will return null. 
	*/
	export function urlToUuid(url : string) : string;	
	/** Return uuid by file path. if uuid not found, it will return null. 
	*/
	export function fspathToUuid(fspath : string) : string;	
	/** Return file path by uuid. if file path not found, it will return null. 
	*/
	export function uuidToFspath(uuid : string) : string;	
	/** Return url by uuid. if url not found, it will return null. 
	*/
	export function uuidToUrl(uuid : string) : string;	
	/** Check existance by url. 
	*/
	export function exists(url : string) : string;	
	/** Check existance by uuid. 
	*/
	export function existsByUuid(uuid : string) : string;	
	/** Check existance by path. 
	*/
	export function existsByPath(fspath : string) : string;	
	/** Check whether asset for a given url is a sub asset. 
	*/
	export function isSubAsset(url : string) : boolean;	
	/** Check whether asset for a given uuid is a sub asset. 
	*/
	export function isSubAssetByUuid(uuid : string) : boolean;	
	/** Check whether asset for a given path is a sub asset. 
	*/
	export function isSubAssetByPath(fspath : string) : boolean;	
	/** Check whether asset contains sub assets for a given url. 
	*/
	export function containsSubAssets(url : string) : boolean;	
	/** Check whether asset contains sub assets for a given uuid. 
	*/
	export function containsSubAssetsByUuid(uuid : string) : boolean;	
	/** Check whether asset contains sub assets for a given path. 
	*/
	export function containsSubAssetsByPath(path : string) : boolean;	
	/** Return asset info by a given url. 
	*/
	export function assetInfo(url : string) : any;	
	/** Return asset info by a given uuid. 
	*/
	export function assetInfoByUuid(uuid : string) : any;	
	/** Return asset info by a given file path. 
	*/
	export function assetInfoByPath(fspath : string) : any;	
	/** Return all sub assets info by url if the url contains sub assets. 
	*/
	export function subAssetInfos(url : string) : any[];	
	/** Return all sub assets info by uuid if the uuid contains sub assets. 
	*/
	export function subAssetInfosByUuid(uuid : string) : any[];	
	/** Return all sub assets info by path if the path contains sub assets. 
	*/
	export function subAssetInfosByPath(fspath : string) : any[];	
	/** Return meta instance by a given url. 
	*/
	export function loadMeta(url : string) : any;	
	/** Return meta instance by a given uuid. 
	*/
	export function loadMetaByUuid(uuid : string) : any;	
	/** Return meta instance by a given path. 
	*/
	export function loadMetaByPath(fspath : string) : any;	
	/** Return whether a given url is reference to a mount 
	*/
	export function isMount(url : string) : boolean;	
	/** Return whether a given path is reference to a mount 
	*/
	export function isMountByPath(fspath : string) : boolean;	
	/** Return whether a given uuid is reference to a mount 
	*/
	export function isMountByUuid(uuid : string) : boolean;	
	/** Return mount info by url 
	*/
	export function mountInfo(url : string) : any;	
	/** Return mount info by uuid 
	*/
	export function mountInfoByUuid(uuid : string) : any;	
	/** Return mount info by path 
	*/
	export function mountInfoByPath(fspath : string) : any;	
	/** mount a directory to assetdb, and give it a name. if you don't provide a name, it will mount to root.
	@param path file system path
	@param mountPath the mount path (relative path)
	@param opts options
	@param cb a callback function
	
	@example 
	```js
	Editor.assetdb.mount('path/to/mount', 'assets', function (err) {
	  // mounted, do something ...
	});
	
	``` 
	*/
	export function mount(path : string, mountPath : string, opts: (hide: any, virtual: any, icon: any) => void, cb? : Function) : void;	
	/** Unmount by name
	@param mountPath the mount path
	
	@example 
	```js
	Editor.assetdb.unmount('assets', function (err) {
	  // unmounted, do something ...
	});
	
	``` 
	*/
	export function unmount(mountPath : string, cb? : Function) : void;	
	/** The remote AssetDB instance */
	export var remote : any;	
	/** The library path */
	export var library : string;	
	/** Reveal given url in native file system 
	*/
	export function explore(url : string) : void;	
	/** Reveal given url's library file in native file system 
	*/
	export function exploreLib(url : string) : void;	
	/** Get native file path by url
	@param cb The callback function 
	*/
	export function queryPathByUrl(url : string, cb: (path: string) => void) : void;	
	/** Get uuid by url
	@param cb The callback function 
	*/
	export function queryUuidByUrl(url : string, cb: (path: string) => void) : void;	
	/** Get native file path by uuid
	@param cb The callback function 
	*/
	export function queryPathByUuid(uuid : string, cb: (path: string) => void) : void;	
	/** Get asset url by uuid
	@param cb The callback function 
	*/
	export function queryUrlByUuid(uuid : string, cb: (url: string) => void) : void;	
	/** Get asset info by uuid
	@param cb The callback function
	
	@example 
	```js
	Editor.assetdb.queryInfoByUuid( uuid, function ( info ) {
	    // info.path
	    // info.url
	    // info.type
	});
	
	``` 
	*/
	export function queryInfoByUuid(uuid : string, cb: (info: any) => void) : void;	
	/** Get meta info by uuid
	@param cb The callback function
	
	@example 
	```js
	Editor.assetdb.queryMetaInfoByUuid( uuid, function ( info ) {
	    // info.assetPath
	    // info.metaPath
	    // info.assetMtime
	    // info.metaMtime
	    // info.json
	});
	
	``` 
	*/
	export function queryMetaInfoByUuid(uuid : string, cb: (info: any) => void) : void;	
	/** Query all assets from asset-db
	@param cb The callback function
	
	@example 
	```js
	Editor.assetdb.deepQuery(function ( results ) {
	    results.forEach(function ( result ) {
	        // result.name
	        // result.extname
	        // result.uuid
	        // result.type
	        // result.children - the array of children result
	    });
	});
	
	``` 
	*/
	export function deepQuery(cb: (results: any[]) => void) : void;	
	/** Query assets by url pattern and asset-type
	@param pattern The url pattern
	@param type The asset type
	@param cb The callback function
	
	@example 
	```js
	Editor.assetdb.queryAssets( 'db://assets/**\/*', 'texture', function ( results ) {
	    results.forEach(function ( result ) {
	        // result.url
	        // result.path
	        // result.uuid
	        // result.type
	    });
	});
	
	``` 
	*/
	export function queryAssets(pattern : string, type : string, cb: (results: any[]) => void) : void;	
	/** Import files outside asset-db to specific url folder.
	The import result will be sent through ipc message `asset-db:assets-created`
	@param rawfiles Rawfile path list
	@param destUrl The url of dest folder
	
	@example 
	```js
	Editor.assetdb.import( [
	     '/file/to/import/01.png',
	     '/file/to/import/02.png',
	     '/file/to/import/03.png',
	], 'db://assets/foobar' );
	
	``` 
	*/
	export function import(rawfiles : any[], destUrl : string) : void;	
	/** Create asset in specific url by sending string data to it.
	The created result will be sent through by ipc message `asset-db:assets-created`
	
	@example 
	```js
	Editor.assetdb.create( 'db://assets/foo/bar/foobar.js', 'var foobar = 0;');
	
	``` 
	*/
	export function create(url : string, data : string) : void;	
	/** Move asset from src to dest
	The moved result will be sent through by ipc message `asset-db:assets-moved`
	
	@example 
	```js
	Editor.assetdb.move( 'db://assets/foo/bar/foobar.js', 'db://assets/foo/bar/foobar02.js');
	
	``` 
	*/
	export function move(srcUrl : string, destUrl : string) : void;	
	/** Delete assets by url list
	The deleted results will be sent through by ipc message `asset-db:assets-deleted`
	
	@example 
	```js
	Editor.assetdb.delete([
	  'db://assets/foo/bar/foobar.js',
	  'db://assets/foo/bar/foobar02.js',
	]);
	
	``` 
	*/
	export function delete(urls : any[]) : void;	
	/** Save specific asset by sending string data
	The saved results will be sent through by ipc message `asset-db:asset-changed`
	
	@example 
	```js
	Editor.assetdb.saveExists( 'db://assets/foo/bar/foobar.js', 'var foobar = 0;');
	
	``` 
	*/
	export function save(url : string, data : string) : void;	
	/** Save specific meta by sending meta's json string
	The saved results will be sent through by ipc message `asset-db:asset-changed`
	
	@example 
	```js
	Editor.assetdb.saveExists( meta.uuid, JSON.stringify(meta, null, 2));
	
	``` 
	*/
	export function saveMeta(uuid : string, metaJson : string) : void;
}