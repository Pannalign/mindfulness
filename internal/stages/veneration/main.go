/*
LICENSE: AGPLv3
AUTHOR: Kusala Tech

This content is paraphrased from the book entitled, "How to Cultivate Mahāsatipaṭṭhāna Book 1", with permission of Sayadaw Bhaddanta Wirosana, Ph.D.
*/
package veneration

import "fmt"

// TODO: Phra Ajahn Dr. Neminda - please review.
var (
	actions map[string][]string = map[string][]string{
		"preparation": []string{
			"stand",
			"sit",
			"touch",
		},
		"respect": []string{
			"bow",
			"touch",
			"remind",
			"raise",
		},
	}
	objects []string = []string{
		"enlightened beings",
		"natural truths",
		"community",
	}
)

func Explain() {
  // NOTE: Typing on a phone, so keeping it simple. Yes, this can be refactored. :)
  fmt.Println("When you observe yourself walking until you come to your seat, stand still.") // TODO: mindful walking prior to sitting

  // for _, action := range actions["preparations"] {

  // }
}


