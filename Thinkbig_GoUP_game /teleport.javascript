'''
function Start() {
	(async () => {
		const avatar = await REDBRICK.AvatarManager.createDefaultAvatar();
		const camera = WORLD.getObject("MainCamera");
		const followingCamera = avatar.setFollowingCamera(camera);
		avatar.setDefaultController();
		
		const tree = WORLD.getObject("nature_fir_005(76d)");
		
		avatar.onCollide(tree, () => {
		    tree.kill();
		    avatar.go(-15,1,16);
		})
		
	})();
}
'''
