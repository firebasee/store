import { Product } from "@/types";
import discountCalculator from "@/utils/discountCalculator";
import {
  Badge,
  Card,
  Group,
  Rating,
  Text,
  Title,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import priceFormatter from "../../utils/priceFormatter";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const theme = useMantineTheme();
  const router = useRouter();
  return (
    <Card radius={"md"} shadow={"lg"}>
      <Card.Section
        mb={"sm"}
        mx={"auto"}
        sx={{
          position: "relative",
          cursor: "pointer",
          width: "100%",
          height: 200,
        }}
        onClick={() => router.push(`/products/${product.id}`)}
      >
        {product.thumbnail ? (
          <Image
            src={product.thumbnail}
            alt={product.title as string}
            fill
            style={{ objectFit: "cover", width: "100%" }}
          />
        ) : null}
      </Card.Section>
      <Card.Section px={"md"} pb={"sm"}>
        <Title order={4} lineClamp={1}>
          {product.title}
        </Title>
        <Badge size="sm" my="xs" variant="dot">
          {product.category}
        </Badge>
        <Group position="apart">
          <Text color={theme.colors.gray[8]} weight={600} size="sm" my="xs">
            {priceFormatter(
              discountCalculator(
                product.price ?? 0,
                product.discountPercentage ?? 0
              )
            )}
          </Text>
          <Tooltip label={product.rating?.toFixed(1)}>
            <Rating size="xs" value={product.rating} readOnly fractions={3} />
          </Tooltip>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default ProductCard;
