package main



import (
    "golang.org/x/tour/pic"
    "fmt"
)

func Pic(dx, dy int) [][]uint8 {
    a := make([][]uint8, dy)
    fmt.Println(dx,dy)
    for i, _ := range a {
        a[i] = make([]uint8, dx)
    }
    for i, _ := range a {
        for j, _ := range a[i] {
            a[i][j] = uint8((i-j)/2)
        }
    }
    fmt.Println(len(a))
    return a;
}

func main() {
	pic.Show(Pic)
}
