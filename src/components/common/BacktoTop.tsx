import { Affix, Button, Text, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

export default function BacktoTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Text align="center">
        Affix is located at the bottom of the screen, scroll to see it
      </Text>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 140}>
          {(transitionStyles) => (
            <Button style={transitionStyles} onClick={() => scrollTo({ y: 0 })}>
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}
