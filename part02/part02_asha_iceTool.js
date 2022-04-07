/* 음료수 얼려 먹기
얼음틀에 구멍이 뚫린 곳은 0 칸막이가 있는 곳은 1
구멍이 뚫린 곳끼리 붙어있으면 연결돼 있는 것으로 간주
이 때 얼음틀에서 생성되는 아이스크림의 개수를 구하시오!

DFS로 해결
*/
function iceTool(tool) {
	let n = tool.length // 보드의 길이
	let answer = 0 // 정답 카운트 해줄 answer
	const dx = [-1, 0, 1, 0] // 시계 방향
	const dy = [0, 1, 0, -1]

	function DFS(x, y) {
		tool[x][y] = 1 // 이제 왔으니까 1로 바꿔주고
		for (let k = 0; k < 4; k++) { // 방향을 돌건데
			let nx = x + dx[k]
			let ny = y + dy[k] // 보드 안에 있고 새로 가는 곳이면
			if (nx >= 0 && nx < n && ny >= 0 && ny < n && tool[nx][ny] === 0) {
				DFS(nx, ny) // 다시 DFS 호출!
			}
		}
	}

	for (let i = 0; i < n; i++) { // 맵 전체를 도는데
		for (let j = 0; j < n; j++) {
			if (tool[i][j] === 0) { // 0이면(갈 수 있는 곳이면)
				answer += 1 // 카운트 올려주고
				DFS(i, j) // DFS에 i j 값 넣어줌
			}
		}
	}
	return answer
}

let output = [
	[0, 0, 1],
	[0, 1, 0],
	[1, 0, 1],
];

let output2 = [
	[0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
	[1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
	[1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
	[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
	[1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
	[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
	[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
];

console.log(iceTool(output)); // 3
console.log(iceTool(output2)); // 8
