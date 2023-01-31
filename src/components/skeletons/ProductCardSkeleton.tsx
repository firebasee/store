import { Group, Skeleton } from "@mantine/core";

const ProductCardSkeleton = () => {
  return (
    <>
      <Skeleton height={200} />
      <Skeleton height={10} my="xs" width="30%" />
      <Skeleton height={8} my="xs" width="20%" />
      <Group position="apart">
        <Skeleton height={8} width="45%" />
        <Skeleton height={10} width="45%" />
      </Group>
    </>
  );
};

export default ProductCardSkeleton;
