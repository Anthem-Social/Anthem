import type { PropsWithChildren, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { ThemedView } from '@/components/ThemedView';

type Props = {
  children: ReactNode;
}

export default function AnthemView({ children }: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View style={styles.header} />
        <ThemedView style={styles.content}>
          {children}
        </ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 52,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    padding: 12,
    gap: 4,
    overflow: 'hidden',
  },
});
