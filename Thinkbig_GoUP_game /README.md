< 사용한 프로그램 & 프레임워크, 라이브러리 언어 > Red Bricks JavaScript Chat GPT

< 구현목록 > 맵 시작 시 음악 재생 미션 완료시 효과음 시간 제한 기능 (초를 세는 기능) 처음에 시작할 때 메세지, start 버튼 마지막에 finish, success 문구

< 기업이 제시한 문제 > 사회 현상에 대한 통찰을 나타낸 프로그램 제시

< Project Review > 조원 4명에서 함께 아이디어를 생각하고, 작품을 구상하였습니다. 인생에서 힘들게 올라가야하는 길과, 지름길이 있음을 표현하고 싶었고, 작년에 출시된 온리업(Only Climb)이라는 게임을 모티브로 하여 작품을 만들었습니다. 게임 제작에 유용하게 만들어진 프로그램을 사용했기 때문에 보다 간편하게 게임을 만들 수 있었습니다.

음악재생, 효과음, 시간 제한 버튼, 메세지, start, finish 버튼 등 간단한 기능들은 미리 코드스니펫에 구현되어 있었습니다. 그래서 이것들을 조금씩 수정해서 사용하면 되었습니다. 그래도, 미리 완성된 코드를 잘 적용하기 위해서는 먼저 코드에 대해 잘 이해하는 것이 필요했습니다.

< 어려웠던 점 > [ 순간이동 기능 구현 ] 캐릭터가 한 지점을 터치하면 순간이동을 하는 코드를 구현하고 싶었습니다. 처음에는 프로그램에서 제공하는 avatar.spawn()이라는 기능을 사용하려고 했었는데, 그러면 처음 등장하는 위치와 겹치는 일이 발생하게 되었습니다. 그래서 이번에는 twin이라는 함수를 사용하려고 생각하고 있었고 또 그게 안되면, yourObject.position.set(x, y, z); avatar.go(x,y,z); 기능을 사용하려고 계획을 하고 있었습니다. 그런데 프로젝트를 완료하기 위해 주어진 시간이 얼마 남지 않아서, 조원들과 다같이 상의를 하고 이 기능을 구현하는 것을 포기하는 것으로 결정을 했습니다. 조금 더 생각하면 될 것 같았는데, 조금 아쉬웠습니다. 하지만, 저 혼자 하는 프로젝트가 아니기 때문에 조원들의 결정에 따르는 것도 필요하다고 생각되었습니다. 함께 프로젝트를 진행해볼 수 있어서 재미있고 즐거웠습니다. 그리고 실력을 더 기르고 싶다고 생각했습니다.

게임은 아래 주소에서 플레이해보실 수 있습니다. https://redbrickland.page.link/2abc

====================================================================================

집에 와서 코드를 작성하고 다시 구현을 해보니, 잘 작동되었습니다. 

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
